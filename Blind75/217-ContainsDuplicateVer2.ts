let nums = [1, 2, 3, 1];

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums: number[]) {
  let obj: object;
  obj = {};

  for (const iterator of nums) {
    if (obj[iterator] === iterator) {
      return true;
    } else {
      obj[iterator] = iterator;
    }
  }

  return false;
};

containsDuplicate(nums);
