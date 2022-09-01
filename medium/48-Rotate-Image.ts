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
function rotate(matrix: number[][]): void {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);

    for (let y = i; y < matrix[0].length; y++) {
      console.log(i, y);
      console.log(y, i);

      console.log([matrix[i][y], matrix[y][i]]);
      console.log([matrix[y][i], matrix[i][y]]);

      [matrix[i][y], matrix[y][i]] = [matrix[y][i], matrix[i][y]];
    }
  }
  console.log(matrix);

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[0][0]);
    [matrix[i][0], matrix[i][2]] = [matrix[i][2], matrix[i][0]];
  }

  console.log(matrix);
}

rotate(matrix);

// wip, works only with 3 by 3 matrix.
