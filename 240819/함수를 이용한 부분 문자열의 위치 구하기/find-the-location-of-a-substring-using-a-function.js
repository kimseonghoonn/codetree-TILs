const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n")
let a = input[0]
let b = input[1]
let n = false

sumAll()

function sumAll(){
    let count = 0
    for (let i=0; i<(a.length-1); i++) {
        if (a[i] == b[0]) {
            if (a[i+1] == b[1]) {
                console.log(i)
            }
        }
    }
    
}