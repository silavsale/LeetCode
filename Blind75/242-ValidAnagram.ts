let s: string = "anagram",
  t: string = "nagaram";
Output: true;

function isAnagram(s: string, t: string): boolean {
  let countS = {},
    countT = {};

  if (s.length !== t.length) {
    return false;
  }

  let sArr = s.split("");
  let tArr = t.split("");

  for (const iterator of sArr) {
    if (!countS[iterator]) {
      countS[iterator] = 1;
    } else {
      countS[iterator]++;
    }
  }
  for (const iterator of tArr) {
    if (!countT[iterator]) {
      countT[iterator] = 1;
    } else {
      countT[iterator]++;
    }
  }

  for (const letter in countS) {
    console.log(countS[letter]);
    console.log(countT[letter]);
    if (countS[letter] !== countT[letter]) {
      return false;
    }
  }

  return true;
}

isAnagram(s, t);
