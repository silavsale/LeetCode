// let s = "()[]{}";
// s = "(]";
// let s = "{{}}";
let s = "{[]";

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let bracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    console.log(bracket["("]);
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      console.log(s[i]);
      stack.push(s[i]);
    } else if (stack.length === 0 || s[i] !== bracket[stack.pop()]) {
      // console.log(s[i]);
      // console.log(stack.pop());
      // console.log(bracket[stack.pop()]);
      return false;
    }
  }

  return stack.length === 0;
};

isValid(s);
