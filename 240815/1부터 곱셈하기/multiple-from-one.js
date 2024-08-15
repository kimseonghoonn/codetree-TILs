const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let result = 1

for(let i=1; i<=10; i++) {
    result *=i
    if (result>=n) {
        console.log(i)
        break;
    }
}