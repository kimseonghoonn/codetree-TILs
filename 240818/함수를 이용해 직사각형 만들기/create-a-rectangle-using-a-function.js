function printNLines(n,m) {
    process.stdout.write("1")
}

const fs = require('fs');
let [n,m] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

for (let i=0; i<n; i++) {
    if (i==1) {
        console.log("")
    }
    for (let j=0; j<m; j++) {
        printNLines(n,m)
    }
}