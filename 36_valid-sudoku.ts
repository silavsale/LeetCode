const board1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]
// Output: true
const board2 = [
  ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
  ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
  ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
  ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
  ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
]
// Output: false

const board3 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

function isValidSudoku(board: string[][]): boolean {
  const valRow = validateRow(board)
  const valCol = validateCol(board)
  const valThree = validateThree(board)
  return valRow && valCol && valThree
}

function validateRow(board: string[][]): boolean {
  const bool = true
  for (let i = 0; i < board.length; i++) {
    const newSet = new Set()
    for (let y = 0; y < board[i].length; y++) {
      if (board[i][y] === '.') continue
      if (newSet.has(board[i][y]) === false) {
        newSet.add(board[i][y])
      } else {
        return false
      }
    }
  }

  return bool
}

function validateCol(board: string[][]): boolean {
  const bool = true
  for (let i = 0; i < board.length; i++) {
    const newSet = new Set()
    for (let y = 0; y < board[i].length; y++) {
      if (board[y][i] === '.') continue
      if (newSet.has(board[y][i]) === false) {
        newSet.add(board[y][i])
      } else {
        return false
      }
    }
  }
  return bool
}

function validateThree(board: string[][]): boolean {
  const bool = true
  for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
      const newBoard = []
      const set = new Set()
      for (let i = 0; i < 3; i++) {
        for (let y = 0; y < 3; y++) {
          if (board[3 * a + i][3 * b + y] === '.') continue
          newBoard.push(board[3 * a + i][3 * b + y])
          if (set.has(board[3 * a + i][3 * b + y]) === false) {
            set.add(board[3 * a + i][3 * b + y])
          } else {
            return false
          }
        }
      }
      newBoard
    }
  }
  return bool
}

isValidSudoku(board1)

// 00 , 01 , 02 , 10, 11, 12, 20, 21, 22,

// 30, 31, 32, 40, 41, 42, 50, 51, 52,

// 60, 61, 62, 70, 71, 72, 80, 81, 82,
