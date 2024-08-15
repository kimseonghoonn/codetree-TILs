const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let count=0

for(let i=1; i<=100; i++) {
    n/= i
    count++

    if (n<=1) {
        break;
    }
}

console.log(count)