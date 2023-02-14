// Input: s = "anagram", t = "nagaram"
// Output: true

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const map: { [key: string]: number } = {}
  for (let i = 0; i < s.length; i++) {
    if (map[s.charAt(i)] === undefined) {
      map[s.charAt(i)] = 1
    } else {
      map[s.charAt(i)]++
    }
  }
  map
  for (let i = 0; i < t.length; i++) {
    if (map[t.charAt(i)] !== undefined) {
      map[t.charAt(i)]--
    } else {
      map[t.charAt(i)] = 1
    }
  }
  map
  const result = Object.values(map).filter((value) => value > 0)
  if (result[0] > 0 || result[0] < 0) {
    return false
  } else return true
}

isAnagram("anagram", "nagaram")
isAnagram("aa", "bb")
isAnagram("rat", "car")
isAnagram("aacc", "ccac")
