import makeExcel from './excel.js'
import getSubField from './get-sub-field.js'
import getSubItems from './get-sub-items.js'

const converter = ({ fields, outputType = 'buffer' }) => {
  const excel = makeExcel({ fields, outputType })
  const types = [
    {
      type: 'xlsx',
      extension: 'xlsx',
      parser: excel
    },
    {
      type: 'csv',
      extension: 'csv',
      parser: excel
    },
    {
      type: 'json',
      extension: 'json',
      parser: ({ data }) => JSON.stringify(data)
    }
  ]

  return ({ data, type, subField, subItems }) => {
    const flatData = getSubField({
      field: subField,
      items: getSubItems({
        field: subItems,
        items: data
      })
    })

    const currentType = types.find((t) => t.type === type)
    if (!currentType) {
      throw new Error(`Unknown type: ${type}`)
    }

    return {
      extension: currentType.extension,
      type: currentType.type,
      data: currentType.parser({ data: flatData, type: currentType.type })
    }
  }
}

export default converter
export { converter, getSubField, getSubItems }
