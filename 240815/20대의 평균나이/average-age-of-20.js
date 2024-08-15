const fs = require('fs');

let a = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let i=0
let sum=0

while(true) {
    if (a[i]>=20 && a[i]<=29) {
        sum+=a[i]
        i++
    }
    else {
        console.log((sum/i).toFixed(2))
        break
    }
}