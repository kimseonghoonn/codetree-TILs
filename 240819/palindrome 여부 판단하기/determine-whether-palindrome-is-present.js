const fs = require('fs');
let a= fs.readFileSync(0).toString().trim()

if (modify(a)) console.log("Yes")
else console.log("No")

function modify(s) {
    for (let i=0; i<s.length; i++) {
        if (s[i] !=s[s.length-i-1]) {
            return false;
        }
    }
    return true
}