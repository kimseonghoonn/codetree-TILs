const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let satisfied = false;

for (let i = a; i <= b; i++) {
    if (1920%i==0 && 2880%i==0) {
        satisfied = true;
    }
}

if (satisfied === true) {
    console.log(1);
}
else {
    console.log(0);
}