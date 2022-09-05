let nums = [3, 4, 1, 2, 1, 3, 2];
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = nums[i] ^ res;
    console.log(res);
  }
  return res;
};

singleNumber(nums);


console.log(4);
