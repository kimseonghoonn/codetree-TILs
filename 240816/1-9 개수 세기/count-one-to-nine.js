const fs = require("fs")

let a = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(a[0])
let x = a[1].split(" ").map(Number)

let countArr = Array(10).fill(0)

for (let i=0; i<n; i++) {
    countArr[x[i]]++
}
for(let i=1; i<=9; i++) {
    console.log(countArr[i])
}