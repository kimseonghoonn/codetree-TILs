const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let result= 1

for (let i = 1; i < b; i++) {
    if(b%a==0) {
        result *= i;
    }
}

console.log(result)