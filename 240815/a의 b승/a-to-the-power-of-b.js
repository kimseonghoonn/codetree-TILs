const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let result= 1

for (let i = 0; i < b; i++) {
    result *= a;
}

console.log(result)