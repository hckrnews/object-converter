# object-converter

Usage:
```javascript
import makeConverter from '@hckrnews/object-converter'

const converter = makeConverter({ fields })
const result = converter({ data, type: 'csv', outputType: 'buffer', subField: 'quantities', subItems: 'battery' })
```

You can set some fields with a name and what field(s) it should return.
And then you can send some data to the converter. (array of objects)

Fields:
```javascript
{
    name: 'Order number',
    field: data => `${data.order_id} / ${data.order_row_id_parsed}`
}
```

Data:
```javascript
[
  {
    order_id: 42,
    ...
  }
]
```

Types:
json, csv, xlsx

Output types:
buffer (e.g. express), string, array, ...
(https://github.com/SheetJS/sheetjs#output-type)
