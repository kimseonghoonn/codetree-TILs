const fs = require('fs');
let a= fs.readFileSync(0).toString().trim()

for (let i=0; i<(parseInt(a.length/2)); i++) {
    let o = modify(a[i], a[a.length-i+1])
}

if (o = true) console.log("Yes")
else console.log("No")

function modify(a,b) {
    let o = false
    if (a==b) true

    return o
}