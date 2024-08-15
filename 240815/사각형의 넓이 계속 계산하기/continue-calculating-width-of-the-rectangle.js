const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split("\n")

let i=0

while(true) {
    let arr = input[i].split(" ")
    let a = Number(arr[0])
    let b = Number(arr[1])
    let m = arr[2]

    i++
    
    console.log(a*b)

    if(m=='C') {
        break
    }
}