const fs = require("fs")

let n = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sum = 0
let sum3 = 0
let count = 0

for (let i=1; i<=10; i++) {
    if (i%2==0) {
        sum +=n[i-1]
    }

    if (i%3==0) {
        sum3 +=n[i-1]
        count++
    }
}
let avg = (sum3/count).toFixed(1)

console.log(sum, avg)