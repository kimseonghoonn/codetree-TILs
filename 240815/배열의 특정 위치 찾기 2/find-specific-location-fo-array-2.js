const fs = require("fs")

let n = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sum1 = 0
let sum2 = 0

for (let i=1; i<=10; i++) {
    if (i%2==0) {
        sum1 += n[i-1]
    }

    if (i%2==1) {
        sum2 += n[i-1]
    }
}

console.log(Math.abs(sum2-sum1))