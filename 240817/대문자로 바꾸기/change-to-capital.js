const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr2d = []

for (let i = 0; i < 5; i++) {
    let sum = 0
    let arr = input[i].split(" ").map(Number)
}

let diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);


for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 3; j++) {
        str += String.fromCharCode(arr2d[i][j].charCodeAt(0) - diff
        ) + ' ';
    }
    console.log(str);
}