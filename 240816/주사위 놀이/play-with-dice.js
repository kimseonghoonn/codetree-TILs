const fs = require("fs")

let a = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let countArr = Array(7).fill(0)

for (let i=0; i<10; i++) {
    countArr[a[i]]++
}

for (let i=1; i<=6; i++) {
    console.log(i + " - " + countArr[i])
}