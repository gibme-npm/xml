// Copyright (c) 2015-2022 Brandon Lehmann
//
// Please see the included LICENSE file for more information.

import * as XMLToJS from 'xml2js';
import { BuilderOptions, ParserOptions } from 'xml2js';
import { parseBooleans, parseNumbers } from 'xml2js/lib/processors';
import xmlbuilder from 'xmlbuilder';

export { ParserOptions, BuilderOptions, xmlbuilder };

/**
 * Parses the XML provided into a JS object
 *
 * @param xml
 * @param options
 */
export const parseXML = async <Type>(
    xml: string | Buffer,
    options: ParserOptions = {}
): Promise<Type> => {
    if (xml instanceof Buffer) {
        xml = xml.toString();
    }

    options.explicitArray ??= false;
    options.explicitRoot ??= false;
    options.attrValueProcessors ??= [parseNumbers, parseBooleans];
    options.attrNameProcessors ??= [parseNumbers, parseBooleans];
    options.valueProcessors ??= [parseNumbers, parseBooleans];
    options.tagNameProcessors ??= [parseNumbers, parseBooleans];

    return new Promise((resolve, reject) => {
        const parser = new XMLToJS.Parser(options).parseString;

        parser(xml, (error, result) => {
            if (error) {
                return reject(error);
            }

            return resolve(result);
        });
    });
};

/**
 * Converts as JS object into an XML string
 *
 * @param obj
 * @param options
 */
export const objToXML = <Type>(
    obj: Type,
    options: BuilderOptions = {}
): string => {
    const builder = new XMLToJS.Builder(options);

    return builder.buildObject(obj);
};
