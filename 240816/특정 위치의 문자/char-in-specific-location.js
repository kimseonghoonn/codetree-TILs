const fs = require("fs")
let a = fs.readFileSync(0).toString().trim()

let word = [ 'L', 'E', 'B', 'R', 'O', 'S']
let idx = -1

for (let i=0; i<6; i++) {
    if (word[i] == a) {
        idx = i
    }
}

if (idx == -1) {
    console.log("None")
}

else {
    console.log(idx)
}