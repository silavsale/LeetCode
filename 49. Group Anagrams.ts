``; // Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// https://leetcode.com/problems/group-anagrams/

let input49 = ["eat", "tea", "tan", "ate", "nat", "bat"];
let output49 = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

function groupAnagrams(strs: string[]): string[][] {
  let groupedAnagrams: { [key: string]: any } = {};
  for (const word of strs) {
    let sortedKey = word.split("").sort().join("");

    !groupedAnagrams[sortedKey]
      ? (groupedAnagrams[sortedKey] = [word])
      : groupedAnagrams[sortedKey].push(word);
  }

  return Object.values(groupedAnagrams);
}

groupAnagrams(input49);
