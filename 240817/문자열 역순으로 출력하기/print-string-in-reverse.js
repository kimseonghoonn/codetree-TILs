const fs = require('fs');
let a = fs.readFileSync(0).toString().trim().split("\n")


for (let i=3; i>=0; i--) {
    console.log(a[i])
}