const out001 = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

let numberRows = 5;

const pascalTriangle = (numero: number): number[][] => {
  if (numero < 1) return [];
  if (numero === 1) return [[1]];
  let array001 = [[1]];

  for (let i = 0; i < numero; i++) {
    let prevRow = array001[i];
    let curRow = [];

    curRow.push(1);

    for (let j = 1; j < prevRow.length; j++) {
      curRow[j] = prevRow[j - 1] + prevRow[j];
    }
    curRow.push(1);
    array001.push(curRow);
  }

  return array001;
};

pascalTriangle(numberRows);
