// https://leetcode.com/problems/product-of-array-except-self/
// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

const nums238 = [0, 2, 3, 4, 2, 1];
// Output: [24,12,8,6]

function productExceptSelf(nums: number[]): number[] {
  let leftVal = 1;
  let rightVal = 1;
  let res = nums238.reduce((acc, val, left, arr) => {
    let right = arr.length - 1 - left;
    acc[left] = leftVal * (acc[left] === undefined ? 1 : acc[left]);
    leftVal *= val;

    acc[right] = rightVal * (acc[right] === undefined ? 1 : acc[right]);
    rightVal *= arr[right];
    return acc;
  }, []);

  return res;
}

productExceptSelf(nums238);
