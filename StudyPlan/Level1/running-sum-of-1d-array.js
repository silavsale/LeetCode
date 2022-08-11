// https://leetcode.com/problems/running-sum-of-1d-array/

const nums = [3,1,2,10,1]

console.log('nums', nums);

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(array) {
   let newArray = []
   let sum = 0
    for (let i = 0; i < array.length; i++) {
    sum = array[i] + sum
        newArray.push(sum)
   }
   return newArray
};


runningSum(nums)