const fs = require('fs');
let n = fs.readFileSync(0).toString().trim().split("\n")
let gr= Number(n[0])
let test = n[1].split(" ").map(Number)
let sum =""

for (let i=0; i<gr; i++) {
    if(test[i]%2==0) {
        sum += test[i]+" "
    }
}
console.log(sum)