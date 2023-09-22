/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const n = 5
const bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// var solution = function (isBadVersion: any) {
//   return function (n: number): number {
//     let left = 0
//     let right = n

//     while (left <= right) {

//     }
//   }
// }

function isBadVersion(num: number): boolean {
  if (num >= 4) return true
  else return false
}

function solution(n: number): number {
  let left = 1
  let right = n

  while (left <= right) {
    let mid = Math.floor((right + left) / 2)

    if (isBadVersion(mid)) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}

solution(5)

export {}
