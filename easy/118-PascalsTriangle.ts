let numRows = 5;
const Output = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

function generate(numRows: number): number[][] {
  if (numRows === 0) {
    return [];
  }
  if (numRows === 1) {
    return [[1]];
  }

  let triangle = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    let prevRow = triangle[i];
    let curRow = [];

    curRow.push(1);

    for (let j = 1; j < prevRow.length; j++) {
      curRow[j] = prevRow[j] + prevRow[j - 1];
    }
    curRow.push(1);
    triangle.push(curRow);
  }

  return triangle;
}

generate(numRows);
