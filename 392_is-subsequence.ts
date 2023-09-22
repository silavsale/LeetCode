// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 
let a = 'acb'

a.charAt(3)

function isSubsequence(s: string, t: string): boolean {
    let sub = false
    for (let i = 0; i < t.length; i++) {
      let firstInS = 0
        if( s[firstInS] === t[i] ){
            s = s.substring(firstInS + 1, s.length)
        } 

      if (s.length === 0){
        sub = true
      }  
    }

    return sub
};

isSubsequence('abc', "ahbgdc")
isSubsequence('axc', "ahbgdc")

export {};
