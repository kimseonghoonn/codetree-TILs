const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let i=0
let m=0

while(true) {
    if(n[i]%2==0) {
        console.log(n[i]/2)
        m++
        i++
    }
    else {
        i++
        continue;
    }

    if(m>=3) break;
}