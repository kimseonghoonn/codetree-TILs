const fs = require('fs');
let n = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sum = 0
let count = 0

for (let elem of n) {
    if (elem == 0) break
    sum+=elem
    count++
}
console.log(sum, (sum/count).toFixed(1))