import { expect, describe, it } from '@jest/globals'
import getSubItems from '../get-sub-items.js'

describe('Get sub items test', () => {
  it('It should get the sub items', () => {
    const data = [
      {
        id: 1,
        battery: [
          {
            id: 2
          },
          {
            id: 3
          }
        ]
      },
      {
        id: 4,
        battery: [
          {
            id: 5
          }
        ]
      },
      {
        id: 6,
        battery: [
          {
            id: 7
          },
          {
            id: 8
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
        battery: [
          {
            id: 2
          },
          {
            id: 3
          }
        ]
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4,
        battery: [
          {
            id: 5
          }
        ]
      },
      {
        id: 5
      },
      {
        id: 6,
        battery: [
          {
            id: 7
          },
          {
            id: 8
          }
        ]
      },
      {
        id: 7
      },
      {
        id: 8
      },
      {
        id: 9
      }
    ]

    const result = getSubItems({ items: data, field: 'battery' })

    expect(result).toEqual(expected)
  })
})
