const fs = require("fs")

let n = fs.readFileSync(0).toString().trim().split("\n").map(Number)
let result= 0

for (let i = 1; i < n; i++) {
    if (n % i == 0) {
        result += i;
    }
}

if (result == n) {
    console.log("P");
}
else {
    console.log("N");
}