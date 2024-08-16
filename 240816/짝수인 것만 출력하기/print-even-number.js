const fs = require("fs")

let a = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(a[0])
let x = a[1].split(" ").map(Number)

let arr=""
for (let i =0; i<n; i++) {
    if(x[i]%2==0) {
        arr+=x[i]+" "
    }
}

console.log(arr)