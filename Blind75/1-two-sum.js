var twoSum = function (nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    let secondNum = target - nums[i]
    if (map[secondNum]) {
        secondNum
        map[secondNum]
        i
        return [map[secondNum], i]
    } else {
      map[nums[i]] = i
    }
    map
  }

}

twoSum([3, 9, 5, 2, 4], 6)
