const fs = require("fs");
let n= fs.readFileSync(0).toString().trim().split("\n").map(Number)

let satisfied = true

for (let i = 0; i < 5; i++) {
    if (n[i]%3!=0) {
        satisfied=false
    }
}

// 출력
if (satisfied == true) {
    console.log(1);
}
else {
    console.log(0);
}