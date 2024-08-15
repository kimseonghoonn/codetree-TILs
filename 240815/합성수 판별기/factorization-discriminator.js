const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let satisfied = false;

for (let i = 2; i < n; i++) {
    // n의 약수가 있다면 합성수입니다.
    if (n % i === 0) {
        satisfied = true;
    }
}

// 출력
if (satisfied === true) {
    console.log("C");
}
else {
    console.log("N");
}