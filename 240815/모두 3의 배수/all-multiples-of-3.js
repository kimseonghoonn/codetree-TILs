const fs = require("fs");
let n= fs.readFileSync(0).toString().trim().split("\n").map(Number)

let satisfied = false;

for (let i = 0; i < n; i++) {
    if (n[i]%3==0) {
        satisfied=true
    }
}

// 출력
if (satisfied == true) {
    console.log("P");
}
else {
    console.log("C");
}