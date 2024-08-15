const fs = require('fs');
let n = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sum = 0

for (let i=0; i<8; i++) {
    sum += n[i]
}

console.log((sum/8).toFixed(1))