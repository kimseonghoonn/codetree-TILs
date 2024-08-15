const fs = require("fs")

let n = fs.readFileSync(0).toString().trim().split("\n").map(Number)
let result= 0
let count = 0

for (let i=1; i<=n[0]; i++) {
    result +=n[i]
    count++
}

console.log(result + " " + (result/count).toFixed(1))