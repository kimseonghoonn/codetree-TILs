const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let count=0

while(true) {
    if(n!=1) {
        n=n/2
        count++
    }

    else {
        console.log(count)
        break;
$0
    }
}