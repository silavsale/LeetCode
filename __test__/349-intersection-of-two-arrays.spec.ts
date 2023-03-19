import { describe, expect, test } from '@jest/globals'
import intersection from '../349-intersection-of-two-arrays'

describe('intersection function', () => {
  test('intersection with parameters [1,2,2,1],[2,2], expects the function to return [2].', () => {
    const returnValue = intersection([1, 2, 2, 1], [2, 2])
    expect(returnValue).toEqual([2])
  })

  test('intersection with parameters [4,9,5],[9,4,9,8,4], expects the function to return [9,4].', () => {
    const returnValue = intersection([4, 9, 5], [9, 4, 9, 8, 4])
    expect(returnValue).toEqual([9, 4])
  })

  test('intersection with parameters [1],[1], expects the function to return [1].', () => {
    const returnValue = intersection([1], [1])
    expect(returnValue).toEqual([1])
  })
})
