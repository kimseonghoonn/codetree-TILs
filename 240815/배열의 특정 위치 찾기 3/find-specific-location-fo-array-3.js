const fs = require("fs")

let n = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sum = 0

for (let i=0; i<100; i++) {
    if (n[i]==0) {
        sum = n[i-1]+n[i-2]+n[i-3]
        break
    }
}

console.log(sum)