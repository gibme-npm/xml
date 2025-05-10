// Copyright (c) 2015-2025, Brandon Lehmann <brandonlehmann@gmail.com>
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

import {
    XMLParser, X2jOptions as XMLParserOptions,
    XMLBuilder,
    XmlBuilderOptions as XMLBuilderOptions,
    validationOptions as XMLValidatorOptions
} from 'fast-xml-parser';

export default abstract class XML {
    /**
     * Parses the XML provided into a JS object
     *
     * @param xml
     * @param parserOptions
     * @param validatorOptions
     */
    public static async parseXML<Type> (
        xml: string | Buffer,
        parserOptions: Partial<XMLParserOptions> = {},
        validatorOptions?: boolean | Partial<XMLValidatorOptions>
    ): Promise<Type> {
        if (typeof xml !== 'string') {
            xml = xml.toString();
        }

        return (new XMLParser(parserOptions)).parse(xml, validatorOptions);
    }

    /**
     * Converts as JS object into an XML string
     *
     * @param obj
     * @param builderOptions
     */
    public static objToXML<Type> (
        obj: Type,
        builderOptions: Partial<XMLBuilderOptions> = {}
    ): string {
        return (new XMLBuilder(builderOptions)).build(obj).toString();
    }
}

export { XML };
