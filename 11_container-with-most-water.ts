// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
//  In this case, the max area of water (blue section) the container can contain is 49.

function maxArea(height: number[]): number {
  let maximum = 0
  let letfPointer = 0
  let rightPointer = height.length - 1

  while (letfPointer < rightPointer) {
    let width = rightPointer - letfPointer
    let maxArea = Math.min(height[letfPointer], height[rightPointer]) * width
    maximum = Math.max(maxArea, maximum)

    if (height[letfPointer] >= height[rightPointer]) {
      rightPointer--
    } else {
      letfPointer++
    }
  }

  return maximum
}

// maxArea([2, 3, 4, 5, 18, 17, 6])
// maxArea([1, 3, 2, 5, 25, 24, 5])
maxArea([1, 8, 100, 2, 100, 4, 8, 3, 7])
