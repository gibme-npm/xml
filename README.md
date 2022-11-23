# Simple XML Helper

```typescript
import {parseXML, objToXML} from "@gibme/xml";

(async () => {
    const obj = {
        test: true,
        text: 'text',
        num: 10,
        float: 3.324234234
    };
    
    const xml = objToXML(obj);
    
    const data = await parseXML(xml);
})();
```
