const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let result = n
let count=0

for(let i=1; i<=100; i++) {
    if(result>1) {
        result /= i
        count++
    }

    else if (result<=1) {
        break;
    }
}

console.log(count)