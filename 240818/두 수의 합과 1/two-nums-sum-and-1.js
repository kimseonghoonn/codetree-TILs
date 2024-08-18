const fs = require('fs');
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let count =0
let c = (a+b).toString()
for (let i=0; i<c.length; i++) {
    if (c[i] == '1') {
        count++
    }
}

console.log(count)