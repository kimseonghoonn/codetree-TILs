const fs = require("fs")

let [str1 , str2] = fs.readFileSync(0).toString().trim().split("\n")

let len1 = str1.length
let len2 = str2.length

console.log(len1 + len2)