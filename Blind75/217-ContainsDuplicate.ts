let nums = [1, 2, 3, 1];

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums: number[]) {
  let obj: object;
  obj = {};
  for (let i of nums) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
};

containsDuplicate(nums);
