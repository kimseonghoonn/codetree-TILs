const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let a,b ="No"

for (let i=0; i<input.length; i++) {
    if (input[i]=="ee") {
        let a="Yes"
    }
    if (input[i]=="ab") {
        let b="Yes"
    }
}

console.log(a,b)