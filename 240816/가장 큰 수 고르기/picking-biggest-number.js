const fs = require('fs');
let a = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let max = a[0]
for (let i=1; i<10; i++) {
    if (a[0]<=a[i]) {
        max = a[i]
    }
}

console.log(max)