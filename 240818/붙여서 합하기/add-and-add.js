const fs = require('fs');
let a= fs.readFileSync(0).toString().trim().split(" ")

let sum1 = a[0]+a[1]
let sum2 = a[1]+a[0]

console.log(Number(sum1)+Number(sum2))