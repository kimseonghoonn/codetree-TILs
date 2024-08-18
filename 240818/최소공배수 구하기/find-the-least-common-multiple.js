function printNLines(n,m) {
    let r=0
    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            r = i;
        }
    }
    let lcm = n*m/r
    console.log(lcm)
}
const fs = require('fs');
let [n,m] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let result = printNLines(n,m)