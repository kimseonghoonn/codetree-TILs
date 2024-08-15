const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n").map(Number)
let n = Number(input[0])
let result= 0

for (let i=0; i<n; i++) {
    let x = Number(input[i])
    if(x%2==0 && x%3==0) {
        result +=n[i]
    }
}

console.log(result)