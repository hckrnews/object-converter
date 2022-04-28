import { expect, describe, it } from '@jest/globals'
import makeConverter from '../converter.js'

const fields = [
  {
    name: 'order_id',
    field: fieldData => fieldData.order_id
  },
  {
    name: 'order_row_id',
    field: fieldData => fieldData.order_row_id
  },
  {
    name: 'sku',
    field: fieldData => fieldData.sku
  },
  {
    name: 'brand',
    field: fieldData => fieldData.brand
  }
]

const data = [
  {
    order_id: 1,
    order_row_id: 2,
    sku: 3,
    brand: 'test'
  },
  {
    order_id: 4
  },
  {
    sku: 5
  }
]

describe('Converter test', () => {
  it('It should convert the data to csv', () => {
    const converter = makeConverter({ fields, outputType: 'string' })
    const output = converter({ data, type: 'csv' })
    const expected = `order_id,order_row_id,sku,brand
1,2,3,test
4,,,
,,5,`

    expect(output.data).toEqual(expected)
    expect(output.type).toEqual('csv')
    expect(output.extension).toEqual('csv')
  })

  it('It should convert the data to json', () => {
    const converter = makeConverter({ fields, outputType: 'string' })
    const output = converter({ data, type: 'json' })
    const expected = JSON.stringify(data)

    expect(output.data).toEqual(expected)
    expect(output.type).toEqual('json')
    expect(output.extension).toEqual('json')
  })

  it('It should throw an error if the type is invalid', () => {
    expect(() => {
      const converter = makeConverter({ fields })
      converter({ data, type: 'xslx' })
    }).toThrow(new Error('Unknown type: xslx'))
  })
})
