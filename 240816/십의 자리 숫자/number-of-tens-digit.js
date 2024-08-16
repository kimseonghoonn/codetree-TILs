const fs = require("fs")

let a = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let countArr = Array(10).fill(0)
let count = 0;
while(true) {
    if(a[count]==0) break;
    countArr[parseInt(a[count]/10)]++
    count++
}

for (let i=1; i<=9; i++) {
    console.log(i + " - " + countArr[i])
}