const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let count=0

while(true) {
    if(n!=1) {
        if (n%2==0) {
            n= n/2
        }
        else {
            n=n*3+1
        }
        count++
    }

    else {
        console.log(count)
        break;
$0
    }
}