const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0])
let x = input[1].split(" ").map(Number)
let count = 0
let min = x[0]

for (let i=1; i<n; i++) {
    if (min > x[i]) {
        min = x[i]
    }
}

for (let i=0; i<n; i++) {
    if (min==x[i]) {
        count++
    }
} 

console.log(min, count)