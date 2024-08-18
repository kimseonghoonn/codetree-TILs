const fs = require("fs")

let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

console.log(fun(a,b,c))

function fun(a,b,c) {
    let min = Math.min(a,b,c)

    return min
}