const fs = require("fs")

let a = Number(fs.readFileSync(0).toString().trim())

let arr= Array(10)
let count = 0
let str = ""+a+" "
arr[0]=a

for (let i=1; i<10; i++) {
    arr[i]=arr[i-1]
}

for (let i=1; i<10; i++) {
    if(arr[i]%5==0) {
        count++
    }
    if(count>=2) break
    arr[i]+=arr[i-1]
    str+=arr[i]+" "
}


console.log(str)