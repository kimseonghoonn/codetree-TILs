const fs = require('fs');
let n = fs.readFileSync(0).toString().trim().split("\n")
let g = Number(n[0])
let grade = n[1].split(" ").map(Number)

let sum = 0

for (let i=0; i<g; i++) {
    sum +=grade[i]
}

avg = (sum/g).toFixed(1)
console.log(avg)

if (avg>=4.0) {
    console.log("Perfect")
}
else if (avg>=3.0) {
    console.log("Good")
}
else {
    console.log("Poor")
}