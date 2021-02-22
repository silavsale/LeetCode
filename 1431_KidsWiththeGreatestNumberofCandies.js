/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
    let boolArray = []
    let bigestNumberInArray = 0;
    for(let i = 0; i < candies.length; i++){
        if(candies[i] > bigestNumberInArray){
            bigestNumberInArray = candies[i]
        }
    }
    
    for(let i = 0; i < candies.length; i++){
        if(bigestNumberInArray > candies[i] + extraCandies){
            boolArray[i] = false
        } else  boolArray[i] = true
    }
    
    return boolArray
};