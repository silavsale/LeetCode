const nums = [3, 2, 4],
  target = 6

function twoSum(nums, target) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    let secondNum = target - nums[i]

    if (map[secondNum] !== undefined) {
      return [map[secondNum], i]
    } else {
      map[nums[i]] = i
    }
  }
}

twoSum(nums, target)
