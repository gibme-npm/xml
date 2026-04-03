# @gibme/xml

A simple, typed XML helper for Node.js built on [fast-xml-parser](https://github.com/nicedaycode/fast-xml-parser).

## Requirements

- Node.js >= 22

## Installation

```bash
npm install @gibme/xml
# or
yarn add @gibme/xml
```

## Documentation

[https://gibme-npm.github.io/xml/](https://gibme-npm.github.io/xml/)

## API

### `XML.objToXML<Type>(obj, builderOptions?): string`

Converts a JavaScript object to an XML string.

```typescript
import XML from "@gibme/xml";

const obj = {
    root: {
        test: true,
        text: "hello",
        num: 42
    }
};

const xml = XML.objToXML(obj);
```

### `XML.parseXML<Type>(xml, parserOptions?, validatorOptions?): Promise<Type>`

Parses an XML string or Buffer into a typed JavaScript object.

```typescript
import XML from "@gibme/xml";

interface MyData {
    root: {
        test: boolean;
        text: string;
        num: number;
    };
}

const data = await XML.parseXML<MyData>(xmlString);
```

### Options Types

- `XML.ParserOptions` — Configuration for the XML parser
- `XML.BuilderOptions` — Configuration for the XML builder
- `XML.ValidatorOptions` — Configuration for XML validation

These map directly to [fast-xml-parser options](https://github.com/nicedaycode/fast-xml-parser#xml-parser).

## License

MIT
