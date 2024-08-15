const fs = require("fs")

let n = fs.readFileSync(0).toString().trim().split(" ")

console.log(n[1] + " " + n[4] + " " + n[7])