/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    for (let index = 0; index < nums.length; index++) {
      for (let y = index + 1; y < nums.length; y++) {
          if (nums[index] > nums[y]) {
            const a = nums[y];
            nums[y] = nums[index];
            nums[index] = a;
          }
      }
    }
      
      return nums
  };