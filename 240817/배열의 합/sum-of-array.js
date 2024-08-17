const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = 4
for (let i = 0; i < 4; i++) {
    let sum = 0
    let arr = input[i].split(" ").map(Number)

    for (let j =0; j<arr.length; j++) {
        sum +=arr[j]
    }
    console.log(sum)
}