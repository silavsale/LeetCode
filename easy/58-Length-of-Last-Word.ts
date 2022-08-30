// let s = "   fly me   to   the moon  ";
let s = " a ";

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s: string): number {
  let word = 0;
  let i = s.length - 1;
  console.log(i);

  while (s[i] === " ") {
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    word++;
    i--;
  }

  return word;
};

lengthOfLastWord(s);
