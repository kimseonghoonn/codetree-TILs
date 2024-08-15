const fs = require('fs');
let n = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sum = []

for (let elem of n) {
    if (elem == 0) break
    sum.push(elem)
}
sum.reverse()
console.log(sum.join(" "))