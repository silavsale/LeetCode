let haystack = "hellollb";
let needle = "llb";

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack.length === 0) {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    let k = i;
    let j = 0;
    console.log(k, j);
    while (haystack[k] === needle[j] && j < needle.length) {
      k++;
      j++;
    }
    if (needle.length === j) return i;
  }
  return -1;
};

strStr(haystack, needle);
