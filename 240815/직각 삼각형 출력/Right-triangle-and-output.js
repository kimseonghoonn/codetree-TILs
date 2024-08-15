const fs = require("fs")

let n = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let str = "*"
console.log(str)
for (let i=1; i<=(n-1); i++) {
    str = "*"
    for (let j=1; j<=i; j++) {
        str +="*"
        for (let k=1; k<=1; k++) {
            if (k)
            str +="*"
        }
    }
    console.log(str)
}