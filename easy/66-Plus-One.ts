// let digits = [1, 2, 3, 9, 9];
let digits = [9, 9];

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    console.log(digits[i]);
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
};

plusOne(digits);
