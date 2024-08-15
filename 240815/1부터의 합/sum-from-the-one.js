const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let result = 0

for(let i=1; i<=100; i++) {
    if (result<=n) {
        result +=i
    }
    else {
        result -=(i-1)
        break;
    }
}

console.log(result)