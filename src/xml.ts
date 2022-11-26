// Copyright (c) 2015-2022, Brandon Lehmann <brandonlehmann@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import * as XMLToJS from 'xml2js';
import { BuilderOptions, ParserOptions } from 'xml2js';
import { parseBooleans, parseNumbers, normalize, firstCharLowerCase, stripPrefix } from 'xml2js/lib/processors';
import xmlbuilder from 'xmlbuilder';

export { XMLToJS, BuilderOptions, ParserOptions, xmlbuilder, normalize, firstCharLowerCase, stripPrefix };

export default class XML {
    /**
     * Parses the XML provided into a JS object
     *
     * @param xml
     * @param options
     */
    public static async parseXML<Type> (
        xml: string | Buffer,
        options: ParserOptions = {}
    ): Promise<Type> {
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
    }

    /**
     * Converts as JS object into an XML string
     *
     * @param obj
     * @param options
     */
    public static objToXML<Type> (
        obj: Type,
        options: BuilderOptions = {}
    ): string {
        return new XMLToJS.Builder(options).buildObject(obj);
    }
}

export { XML };
