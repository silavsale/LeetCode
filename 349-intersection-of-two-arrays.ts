// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

export default function intersection(nums1: number[], nums2: number[]): number[] {
  let map1: { [key: number]: number } = {}
  let map2: { [key: number]: number } = {}

  let length = nums1.length > nums2.length ? nums1.length : nums2.length
  const arr: number[] = []
  for (let i = 0; i < length; i++) {
    if (map1[nums1[i]] === undefined && nums1[i] !== undefined) {
      map1[nums1[i]] = 1
    }

    if (map2[nums2[i]] === undefined && nums2[i] !== undefined) {
      map2[nums2[i]] = 1
    }

    if (nums1[i] in map2) {
      if (!arr.includes(nums1[i])) {
        arr.push(nums1[i])
      }
    }
    if (nums2[i] in map1) {
      if (!arr.includes(nums2[i])) {
        arr.push(nums2[i])
      }
    }
  }

  return arr
}

intersection([4, 9, 5], [9, 4, 9, 8, 4])
intersection([1], [1])
