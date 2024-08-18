const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ")

input.reverse()

for (let i=0; i<input.length; i++) {
    console.log(input[i])
}