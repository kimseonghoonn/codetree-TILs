const fs = require("fs")

let n = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let str = ""

for (let i=0; i<n[i]; i++) {
    str = ""
    for (let j=0; j<n[i]-i; j++) {
        str +="*"
    }
    console.log(str)
}