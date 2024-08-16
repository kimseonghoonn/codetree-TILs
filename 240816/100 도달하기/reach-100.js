const fs = require("fs")

let a = Number(fs.readFileSync(0).toString().trim())

let arr = [1,a]
let count=1;
let str=""

while(true) {
    count++
    arr[count]=arr[count-1] + arr[count-2]
    if(arr[count]>=100) break
}

for(let i=0; i<=count; i++) {
    str += arr[i]+ " "
}

console.log(str)