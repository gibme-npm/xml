# Simple XML Helper

## Documentation

[https://gibme-npm.github.io/xml/](https://gibme-npm.github.io/xml/)

## Sample Code

```typescript
import XML from "@gibme/xml";

(async () => {
    const obj = {
        test: true,
        text: 'text',
        num: 10,
        float: 3.324234234
    };
    
    const xml = XML.objToXML(obj);
    
    const data = await XML.parseXML(xml);
})();
```
