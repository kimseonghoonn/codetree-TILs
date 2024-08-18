const fs = require("fs")

let input = fs.readFileSync(0).toString().trim()

console.log(fun(input))

function fun(n) {
    let result=0
    for (let i=1; i<=n; i++) {
        result +=i
    }

    return parseInt(result/10)
}