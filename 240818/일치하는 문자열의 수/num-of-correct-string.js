const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n")

let n = input[0].split(" ")
let num = Number(n[0])
let a = n[1]
let count = 0

for (let i=1; i<=num; i++) {
    if (input[i] == n[1]) {
        count++
    }
}

console.log(count)