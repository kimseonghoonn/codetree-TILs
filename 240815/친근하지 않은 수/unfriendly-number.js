const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let count =0

for(let i=1; i<=n; i++) {
    if (i%2==0 || i%3==0 || i%5==0) {
        continue;
    }
    count++
}

console.log(count)