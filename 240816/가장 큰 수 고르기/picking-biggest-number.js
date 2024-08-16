const fs = require('fs');
let a = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let max = Number.MIN_SAFE_INTEGER;
for (let i=1; i<10; i++) {
    if (max<=a[i]) {
        max = a[i]
    }
}

console.log(max)