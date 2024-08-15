const fs = require('fs');
let n = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0

for (let i =0; i<10; i++) {
    if (n[i]%3==0) {
        console.log(n[i-1])
        break
    }
}