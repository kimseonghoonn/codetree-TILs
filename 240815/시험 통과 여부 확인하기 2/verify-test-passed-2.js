const fs = require('fs');
let n = fs.readFileSync(0).toString().trim().split("\n")
let gr= Number(n[0])
let summ=0

for (let i=1; i<=gr; i++) {
    let test = n[i].split(" ").map(Number)
    let sum=0

    for (let j=0; j<4; j++) {
        sum += test[j]
    }

    let avg = sum / 4

    if(avg >= 60) {
        console.log("pass")
        summ++
    }

    else {
        console.log("fail")
    }
}

console.log(summ)