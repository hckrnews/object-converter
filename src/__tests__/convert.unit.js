import { expect, describe, it } from '@jest/globals'
import makeConvert from '../convert.js'

describe('Convert test', () => {
  it('It should convert the data', () => {
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
    const convert = makeConvert({ fields })
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
    const output = convert(data)
    const expected = [
      [
        'order_id',
        'order_row_id',
        'sku',
        'brand'
      ],
      [
        1,
        2,
        3,
        'test'
      ],
      [
        4,
        undefined,
        undefined,
        undefined
      ],
      [
        undefined,
        undefined,
        5,
        undefined
      ]
    ]
    expect(output).toEqual(expected)
  })
})
