function printNLines(n) {
    console.log("12345^&*()_")
}

const fs = require('fs');
let n = fs.readFileSync(0).toString().trim()

for (let i=0; i<n; i++) {
    printNLines(n)
}