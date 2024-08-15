const fs = require("fs")

let a = fs.readFileSync(0).toString().trim().split(" ").map(Number)

console.log(a[2]+a[4]+a[9])