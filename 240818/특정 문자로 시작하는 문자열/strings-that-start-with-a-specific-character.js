const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

let count = 0
let avg = 0

for (let i=1; i<input[0]; i++) {
    if(input[i][0] == input[5]) {
        input[i]
        count++
        avg += input[i].length
    }
}

console.log(count, (avg/count).toFixed(2))