// const s = "PPALLP"
const s = "PPALLL"

function checkRecord(s: string): boolean {
  let map: { [key: string]: number } = {}
  let absent = true
  let countLate = 0
  //   let prevType = ""

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1
    } else {
      map[s[i]]++
    }

    if (s[i] === "L") {
      countLate++
    } else {
      countLate = 0
    }

    if (countLate > 2) {
      absent = false
    }
  }

  if (map["A"] > 1) absent = false

  return absent
}

// checkRecord(s)
checkRecord("AAAA")

export {}
