// Input: nums = [3,2,4], target = 6
// Output: [1,2]

import { KeyObject } from "crypto"

function twoSum(nums: number[], target: number): number[] {
  const output: number[] = []

  const hashTable: { [key: number]: number } = {}
  for (let i = 0; i < nums.length; i++) {
    hashTable[i] = nums[i]
    const secondNum = target - nums[i]
    if (hashTable[secondNum]) {
        return [hashTable[secondNum], hashTable[nums[i]]]
    }
  }
  Object.keys(hashTable[0])
  hashTable
  return output
}

twoSum([3, 2, 4], 6)

export {}
