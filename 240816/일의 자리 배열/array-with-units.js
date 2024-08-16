const fs = require("fs")

let a = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = ""
arr+=a[0]+ " "+a[1]+" "

for (let i =2; i<10; i++) {
    a[i] = a[i-1]+a[i-2]
    if(a[i]>=10) {
        a[i] -=10
    }
    arr +=a[i]+" "
}

console.log(arr)