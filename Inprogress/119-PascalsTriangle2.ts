let rowIndex = 3;
Output: [1, 3, 3, 1];

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex: number): number[][] {
  if (rowIndex < 0) {
    return [];
  }

  let triangle = [[1]];
  let curRow = [1];
  for (let i = 1; i < rowIndex; i++) {
    curRow[i] = i + i * i;
  }
  triangle.push(curRow);
  return triangle;
};

getRow(rowIndex);
