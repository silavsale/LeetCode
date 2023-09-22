const nums: number[] = [-1, 0, 3, 5, 9, 12]
const target = 9
function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

search(nums, target)

export {}
