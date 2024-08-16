const fs = require("fs")

let a = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let countArr = Array(10).fill(0)

for (let i=0; i<10; i++) {
    if(a[i]==0) break;
    countArr[parseInt(a[i]/10)]++
}

for (let i=1; i<=9; i++) {
    console.log(i + " - " + countArr[i])
}