import { describe, expect, test } from '@jest/globals'
import twoSum from '../Blind75/1_two-sum'

describe('TwoSum function', () => {
  test('The test uses Array [1, 3, 7, 9, 2] and 11 as the target number, and expects the function to return [3, 4].', () => {
    const returnValue = twoSum([1, 3, 7, 9, 2], 11)
    expect(returnValue).toEqual([3, 4])
  })

  test('TwoSum should return Array type', () => {
    const returnValue = twoSum([1, 2, 3], 3)
    console.log(typeof returnValue)
    console.log('returnValue', returnValue)

    expect(returnValue).toBeInstanceOf(Array)
  })

  test('If no posible sum exists return null', () => {
    const returnValue = twoSum([1, 2, 3], 100000)
    expect(returnValue).toBeNull()
  })

  test('If Array is empty return null', () => {
    const returnValue = twoSum([], 100000)
    expect(returnValue).toBeNull()
  })

  test('If Array has only 1 element return null', () => {
    const returnValue = twoSum([5], 5)
    expect(returnValue).toBeNull()
  })

  test('If target value is 1 of less return null', () => {
    const returnValue = twoSum([1, 2], 1)
    expect(returnValue).toBeNull()
  })
})
