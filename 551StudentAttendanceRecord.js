function checkRecord(s) {
    var map = {};
    var eligible = true;
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 1;
        }
        else {
            map[s[i]]++;
        }
    }
    console.log(map);
    return eligible;
}
checkRecord("PPALLP");
checkRecord("PPALLL");
