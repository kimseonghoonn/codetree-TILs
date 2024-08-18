const fs = require("fs")

let a = fs.readFileSync(0).toString().trim()

fun(a)

function fun(a) {
    if (a % 2 == 0 && ((parseInt(a/10)) + (a%10)) % 5 == 0) {
        console.log("Yes")
    }
    else console.log("No")
}