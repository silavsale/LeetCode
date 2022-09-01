let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// matrix = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ];

let output = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];

// output = [
//   [15, 13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7, 10, 11],
// ];

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): any {
  if (matrix === null || matrix.length === 0) {
    return;
  }

  let n = matrix.length;
  transposeMatrix(matrix as number[][], n as number);
  reverseMatrix(matrix as number[][], n as number);

  console.log(matrix);

  return matrix;
}
let transposeMatrix = (matrix: number[][], n: number) => {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      swap(
        matrix as number[][],
        i as number,
        j as number,
        j as number,
        i as number
      );
    }
  }
};
let reverseMatrix = (matrix: number[][], n: number) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0, k = n - 1; j < k; j++, k--) {
      swap(
        matrix as number[][],
        i as number,
        j as number,
        i as number,
        k as number
      );
    }
  }
};
let swap = (matrix: number[][], i: number, j: number, k: number, l: number) => {
  let temp = matrix[i][j];
  matrix[i][j] = matrix[k][l];
  matrix[k][l] = temp;
};

rotate(matrix);
