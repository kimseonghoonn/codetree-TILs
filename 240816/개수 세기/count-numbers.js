const fs = require("fs")
let n = fs.readFileSync(0).toString().trim().split("\n")
let [a,b] = n[0].split(" ").map(Number);
let c = n[1].split(" ").map(Number)
let count = 0

for (let i=0; i<a; i++) {
    if (c[i] == b) {
        count++
    }
}

console.log(count)