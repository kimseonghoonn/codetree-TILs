const fs = require("fs")

let n = fs.readFileSync(0).toString().trim().split("\n").map(Number)
let result= 0
let count = 0

for (let i=1; i<=n; i++) {
    if(n%i==0) {
        count++
    }
}

if(count>=1) {
        console.log("P")
}
else {
        console.log("N")
}