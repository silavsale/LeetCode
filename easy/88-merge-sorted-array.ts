let nums1 = [2, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [1, 5, 6],
  n = 3;
// Output: [1,2,2,3,5,6]

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let pointer = m + n - 1;

  while (m > 0 && n > 0) {
    if (nums1[m - 1] < nums2[n - 1]) {
      nums1[pointer] = nums2[n - 1];
      pointer--;
      n--;
    } else {
      nums1[pointer] = nums1[m - 1];
      pointer--;
      m--;
    }
  }

  while (n > 0) {
    nums1[pointer] = nums2[n - 1];
    n--;
    pointer--;
  }

  console.log(nums1);
}

merge(nums1 as number[], m as number, nums2 as number[], n as number);
