const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let len = 0
for (let i=0; i<input.length; i++) {
    len += input[i].length
}
console.log(len)