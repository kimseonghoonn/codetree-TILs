const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let fu = fun(a,b)
console.log(fu)

function fun(a,b) {
    let count=0
    for (let i=a; i<=b; i++) {
        let o = true
        for (let j=2; j<i; j++) {
            if (i%j!=0) {
                continue
            }
            else {
                o=false
                break
            }
        } 
        if (o == true) count+=i
    }
    return count
}