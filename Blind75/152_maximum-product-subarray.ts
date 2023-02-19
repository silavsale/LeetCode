// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

function maxProduct(nums: number[]): number {
  if (nums == null || nums.length === 0) {
    return 0
  }

  let maxProduct = nums[0]
  let minProduct = nums[0]
  let maxSoFar = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i]

    if (num < 0) {
      let temp = maxProduct
      maxProduct = minProduct
      minProduct = temp
    }

    if (num > maxProduct * num) {
      maxProduct = num
    } else {
      maxProduct = maxProduct * num
    }

    if (num < minProduct * num) {
      minProduct = num
    } else {
      minProduct = minProduct * num
    }

    if (maxSoFar > maxProduct) {
      maxSoFar = maxSoFar
    } else {
      maxSoFar = maxProduct
    }
  }

  return maxSoFar
}

// maxProduct([2, 3, -2, 4])
// maxProduct([-2])
maxProduct([-2, 3, -4])
