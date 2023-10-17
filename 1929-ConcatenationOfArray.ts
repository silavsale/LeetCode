// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// Example 1:

const nums = [1, 2, 1];
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

const nums2 = [1, 3, 2, 1];
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]

// function getConcatenation(nums: number[]): number[] {
//   return [...nums, ...nums];
// }

function getConcatenation(nums: number[]): number[] {
  const arr2 = [];

  for (let i = 0; i < nums.length; i++) {
    arr2[i] = nums[i];
    arr2[i + nums.length] = nums[i];
  }

  return arr2;
}

getConcatenation(nums);
getConcatenation(nums2);

export {};
