let nums = [2,7,11,15], target = 9
Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums : number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {   
        if(nums[i]+nums[j] === target){
            return [i,j]
        } 
      }
    }
    return []
};

twoSum(nums, target)