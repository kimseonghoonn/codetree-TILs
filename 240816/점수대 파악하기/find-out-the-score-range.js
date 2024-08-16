const fs = require("fs")

let a = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let countArr = Array(11).fill(0)
let count = 0

while(true) {
    if (a[count]==0) break
    countArr[parseInt(a[count]/10)]++
    count++
}

for (let i=10; i>=1; i--) {
    console.log(i+"0" + " - " + countArr[i])
}