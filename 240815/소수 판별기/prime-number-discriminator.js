const fs = require("fs");
let n= fs.readFileSync(0).toString().trim().split(" ").map(Number)

let satisfied = true;

for (let i = 2; i < n; i++) {
    if (n%i==0) {
        satisfied=false
    }
}

// 출력
if (satisfied == true) {
    console.log("P");
}
else {
    console.log("C");
}