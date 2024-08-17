const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0])
let cnt=0
let count = 0
for (let i=1; i<=n; i++) {
    let a = input[i]
    cnt +=input[i].length
    for (let j=0; j<input[i].length; j++) {
        if (input[i][j] == 'a') {
            count++
        }
    }
}
console.log(cnt, count)