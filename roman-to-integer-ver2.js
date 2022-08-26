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
s = "MCMXCIV"; // 1994

let newNum = 0;

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0;
  s.split("").forEach((lettter, i) => {
    if (rom[lettter] < rom[s[i + 1]]) {
      res -= rom[lettter];
    } else res += rom[lettter];
  });

  return res;
};

romanToInt(s);
