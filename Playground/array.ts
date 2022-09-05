let rowIndex001 = 4;

let result = [1];

for (let i = 1; i <= rowIndex001; i++) {
  result[i] = (result[i - 1] * (rowIndex001 - i + 1)) / i;
}

result;


let result1 = (1 * (4 - 1 + 1)) / 1;
let result2 = (4 * (4 - 2 + 1)) / 2;

