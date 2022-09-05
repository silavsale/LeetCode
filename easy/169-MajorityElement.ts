let nums169: number[] = [2, 2, 1, 1, 1, 2, 2];
Output: 3;

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums: number[]): number {
  let res = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      res = nums[i];
    }
    if (nums[i] === res) {
      count++;
    } else {
      count--;
    }
  }

  return res;
};

majorityElement(nums169);
