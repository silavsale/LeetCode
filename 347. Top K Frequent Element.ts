// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// 347. Top K Frequent Element
// https://leetcode.com/problems/top-k-frequent-elements/
const nums347 = [1, 1, 1, 2, 2, 3, 5, 5, 5, 5],
  // const nums347 = [3, 0, 1, 0],
  k = 1;
// Output: [1,2]

function topKFrequent(nums: number[], k: number): number[] {
  let count: { [key: number]: any } = {};

  for (const iterator of nums) {
    if (count[iterator] === undefined) {
      count[iterator] = 1;
    } else {
      count[iterator]++;
    }
  }

  const keysSorted = Object.keys(count).sort((a, b) => count[b] - count[a]);

  console.log(count);

  return Array.from(keysSorted.slice(0, k), Number);
}

topKFrequent(nums347, k);
