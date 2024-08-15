const fs = require("fs")

let a = fs.readFileSync(0).toString().trim().split("\n").map(Number)
let result= 0
let count = 0

for (let i=0; i<10; i++) {
    if(a[i]>=0 && a[i]<=200) {
        result +=a[i]
        count++
    }
}

console.log(result + " " + (result/count).toFixed(1))