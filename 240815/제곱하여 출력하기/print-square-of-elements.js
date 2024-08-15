const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n")

let count = Number(input[0])

let sum = input[1].split(" ").map(Number)


for (let i = 0; i<count; i++) {
    sum[i] = sum[i]*sum[i]
}

let str = ""
for (let i =0; i<count; i++) {
    str += sum[i]+ " "
}

console.log(str)