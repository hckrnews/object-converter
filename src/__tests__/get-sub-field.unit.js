import { expect, describe, it } from '@jest/globals'
import getSubField from '../get-sub-field.js'

describe('Get sub field test', () => {
  it('It should get the sub field', () => {
    const data = [
      {
        id: 1,
        quantities: [
          {
            quantity: 2
          },
          {
            quantity: 3
          }
        ]
      },
      {
        id: 4,
        quantities: [
          {
            quantity: 5
          }
        ]
      },
      {
        id: 6,
        quantities: [
          {
            quantity: 7
          },
          {
            quantity: 8
          }
        ]
      },
      {
        id: 9
      }
    ]

    const expected = [
      {
        id: 1,
        quantities: [
          {
            quantity: 2
          }
        ]
      },
      {
        id: 1,
        quantities: [
          {
            quantity: 3
          }
        ]
      },
      {
        id: 4,
        quantities: [
          {
            quantity: 5
          }
        ]
      },
      {
        id: 6,
        quantities: [
          {
            quantity: 7
          }
        ]
      },
      {
        id: 6,
        quantities: [
          {
            quantity: 8
          }
        ]
      },
      {
        id: 9
      }
    ]

    const result = getSubField({ items: data, field: 'quantities' })

    expect(result).toEqual(expected)
  })
})
