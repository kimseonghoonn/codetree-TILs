const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let result= 0
let count = 0

for (let i=a; i<=b; i++) {
    if(i%5==0 || i%7==0) {
        result +=i
        count++
    }
}

console.log(result + " " + (result/count).toFixed(1))