function printNLines(n) {
    let count=1
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            process.stdout.write(count+" ")
            count++
            if (count>=10) count = count/10
        }
        console.log("")
    }
}

const fs = require('fs');
let n = fs.readFileSync(0).toString().trim()
printNLines(n)