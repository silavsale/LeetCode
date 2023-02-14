// Input: s = "()[]{}"
// Output: true

function isValid(s: string): boolean {
  const brackets: string = "() [] {}"

  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i])

    const openBrackets = stack[stack.length - 2]
    const closeBrackets = stack[stack.length - 1]
    const fullBrackets = openBrackets + closeBrackets

    if (brackets.includes(fullBrackets)) {
      stack.pop()
      stack.pop()
    }
  }

  return stack.length === 0
}

isValid("()[]{}")
isValid("()[{}")
