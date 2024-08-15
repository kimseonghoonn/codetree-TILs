const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let result= 0

for (let i=a; i<=b; i++) {
    result *=i
    }
}

console.log(result)