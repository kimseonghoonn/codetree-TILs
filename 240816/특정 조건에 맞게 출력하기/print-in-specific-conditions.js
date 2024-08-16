const fs = require("fs")

let a = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let str=""

for (let i=0; i<100; i++) {
    if(a[i]%2==1) {
        a[i]+=3
    }
    else {
        parseInt(a[i]/=2)
    }
    if (a[i]==0) break
    str+=a[i]+" "
}


console.log(str)