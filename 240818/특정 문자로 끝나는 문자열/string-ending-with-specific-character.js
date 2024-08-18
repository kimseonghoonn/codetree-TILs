const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let o = "false"
for (let i=0; i<10; i++) {
    if(input[i][(input[i].length-1)] == input[10]) {
        console.log(input[i])
        o = "true" 
    }
}

if (o=="false") {
    console.log("None")
}