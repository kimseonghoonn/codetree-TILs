const fs = require('fs');

let [n,m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < m; j++) {
        str += "*";
    }
    console.log(str);
}