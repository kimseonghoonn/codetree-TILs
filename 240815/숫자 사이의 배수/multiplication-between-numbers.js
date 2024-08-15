const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let result= 0

for (let i=a; i<=b; i++) {
    if(x%5==0 && x%7==0) {
        result +=i
    }
}

console.log(result)