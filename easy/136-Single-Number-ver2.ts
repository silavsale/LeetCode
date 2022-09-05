let nums = [3, 4, 1, 2, 1, 3, 2];
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums: number[]): number {
  let obj = {};
  for (let i of nums) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }
console.log(obj);

  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
  return 0;
};

singleNumber(nums);


const array1 = ['a', 'b', 'c'];

for (const element in array1) {
  console.log(element);
}