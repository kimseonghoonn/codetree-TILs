const fs = require('fs');
let [n,m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

[n,m] = swap(n,m)
console.log(n,m)

function swap(a,b) {
    [a,b] = [b,a]
    return [a,b]
}