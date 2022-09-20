let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

function groupAnagrams(strs: string[]): string[][] {
  let obj = {};
  const sortedStrs = strs.map((word) => word.split("").sort().join());
  for (let i = 0; i < strs.length; i++) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

  for (const iterator of strs) {
  }

  console.log(sortedStrs);

  console.log(obj);
}

groupAnagrams(strs);
