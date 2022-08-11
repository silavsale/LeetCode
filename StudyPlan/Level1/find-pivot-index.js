nums = [1,7,3,6,5,6]
// nums = [2,1,-1]

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(array) {
    let sum = 0 
    array.map(item => {return sum = item + sum })
    sum
    let leftSum = 0
    for (let i = 0; i < array.length; i++) {
        if(sum - leftSum - array[i] === leftSum){
            return i
        }
        leftSum += array[i]
    }
    return -1
};

pivotIndex(nums)