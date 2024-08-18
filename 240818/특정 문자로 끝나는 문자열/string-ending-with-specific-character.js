const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

for (let i=0; i<10; i++) {
    if(input[i][(input[i].length-1)] == input[10]) {
        console.log(input[i]) 
    }
}