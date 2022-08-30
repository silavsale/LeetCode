// let nums = [0, 1, 0, 2, 2, 3, 0, 4, 2];
let nums = [3, 2, 2, 3];
let val = 2;

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  console.log(nums);
  return k;
};

removeElement(nums, val);
