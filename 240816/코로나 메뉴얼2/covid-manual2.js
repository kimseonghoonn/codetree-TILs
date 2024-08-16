const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")
let a,b
let arr=Array(5).fill(0)

for(let i=0; i<3; i++) {
    [a,b] = input[i].split(" ")

    if (a=="Y") {
        if(b>=37) {
            arr[1]++
        }
        else {
            arr[3]++
        }
    }
    else {
        if(b>=37) {
            arr[2]++
        }
        else {
            arr[4]++
        }
    }
}
let str = ""
for (let i=1; i<=4; i++) {
    str += arr[i] + " "
}

if (arr[1]>=2) {
    str +="E";
}

console.log(str)