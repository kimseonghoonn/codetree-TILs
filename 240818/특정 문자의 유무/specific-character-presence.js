const fs = require("fs")

let input = fs.readFileSync(0).toString().trim()

let a = false
let b = false

for (let i=0; i<input.length-1; i++) {
    if (input[i]=='e') {
        if (input[i+1] == 'e') {
            a = true
        }
    }

    if (input[i]=='a') {
        if (input[i+1] == 'b') {
            b = true
        }
    }
}
if (a == true) a="Yes"
else a="No"

if (b == true) b="Yes"
else b="No"

console.log(a,b)