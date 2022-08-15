// 205. Isomorphic Strings


let s = "egg", t = "add"


var isIsomorphic = function(s, t) {
  let obj1 = {}, obj2 = {}
  
for (let i = 0; i < s.length; i++) {
    obj1[s[i]]
    obj2[t[i]]
    if(obj1[s[i]] !== obj2[t[i]]){
        return false
    } else {
        obj1[s[i]] = i
        obj2[t[i]] = i
    }
    
    obj1
    obj2
    s[i]
    t[i]
}

return true


};

isIsomorphic(s,t)