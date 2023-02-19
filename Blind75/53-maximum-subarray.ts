function maxSubArray(nums: number[]): number {
  let maxSubArraySum = nums[0]
  let currentSubArraySum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + currentSubArraySum > nums[i]) {
      currentSubArraySum = nums[i] + currentSubArraySum
    } else {
      currentSubArraySum = nums[i]
    }

    if (currentSubArraySum > maxSubArraySum) {
      maxSubArraySum = currentSubArraySum
    }
  }

  return maxSubArraySum
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
