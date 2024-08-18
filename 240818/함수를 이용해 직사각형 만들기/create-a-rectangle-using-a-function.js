function printNLines(n,m) {
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            process.stdout.write("1")
        }
        console.log("")
    }
}

const fs = require('fs');
let [n,m] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
printNLines(n,m)