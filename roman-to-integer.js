let rom = {
  V: 5,
  I: 1,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// s = "LVIII";
// s = "MCMXCIV"; // 1994
s = "III"; // 1994

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let currentInt = rom[s.charAt(i)];
    let nextInt = rom[s.charAt(i + 1)];
    if(nextInt){
      if (currentInt >= nextInt) {
        total += currentInt;
      } else {
        total += (nextInt - currentInt);
        i++;
      }
    } else {
      total += currentInt
    }
  }
  return total;
};

romanToInt(s);
