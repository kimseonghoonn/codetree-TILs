const fs = require('fs');

let a = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let result = ""


for(let i=1; i<=a; i++) {
    if ((i/8)%2==0 || (i%2==0 && i%4!=0) || ((i%7)<4)) {
        continue;
    }
    result +=i+" "
}

console.log(result)