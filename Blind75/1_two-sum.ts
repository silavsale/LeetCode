// Input: nums = [3,2,4], target = 6
// Output: [1,2]

function twoSum(nums: number[], target: number): number[] | null {
  if (target < 2 || nums.length < 2) {
    return null
  }

  const obj: { [key: number]: number } = {}

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i
    const firstElement = target - nums[i]
    obj
    if (obj[firstElement] !== undefined) {
      return [obj[firstElement], i]
    }
  }

  return null
}

// twoSum([3, 2, 4], 6)
twoSum([1, 2, 3], 3)

export default twoSum
