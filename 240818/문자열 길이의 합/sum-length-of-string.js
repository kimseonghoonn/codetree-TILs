const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let cnt=0
let count = 0
for (let i=1; i<=input[0]; i++) {
    cnt +=input[i].length
    for (let j=0; j<input[i].length+1; j++) {
        if (input[i][j] == 'a') {
            count++
        }
    }
}
console.log(cnt, count)