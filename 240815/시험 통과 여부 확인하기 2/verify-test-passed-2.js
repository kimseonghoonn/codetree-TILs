const fs = require('fs');
let n = fs.readFileSync(0).toString().trim().split("\n")
let gr= Number(n[0])
let test = n[1].split(" ").map(Number)


for (let i=0; i<n; i++) {
    let sum=0
    for (let j=0; j<4; j++) {
        sum += test[i]
    }
    let avg=0
    avg = sum/4

    if(avg>=60) {
        console.log("pass")
    }

    else if(avg<60) {
        console.log("fail")
    }
}