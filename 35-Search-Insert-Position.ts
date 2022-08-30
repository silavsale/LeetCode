// let nums = [1, 3, 5, 6];
let nums = [1, 3, 5, 6];

let target = 7;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    console.log(i, nums.length, nums[nums.length]);
    if (nums[nums.length - 1] < target) {
      return nums.length;
    }
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] > target) {
      return i;
    }
  }
};

searchInsert(nums, target);
