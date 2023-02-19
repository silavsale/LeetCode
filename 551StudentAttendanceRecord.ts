function checkRecord(s: string): boolean {
  const map: { [key: string]: number } = {}
  let eligible = true
  let late = 0
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1
    } else {
      map[s[i]]++
    }

    if (s[i] === "L") {
      late++
    } else {
      late = 0
    }

    if (late > 2) {
      eligible = false
    }
  }

  if (map["A"] > 1) {
    eligible = false
  }

  return eligible
}

checkRecord("PPALLP")
checkRecord("PPALLL")
