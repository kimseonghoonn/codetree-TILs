function contains369(n) {
    while (n > 0) {
        if (n % 10 === 3 || n % 10 === 6 || n % 10 === 9) {
            return true;
        }

        n = parseInt(n / 10);
    }

    return false;
}

function is369Number(n) {
    return contains369(n) || (n % 3 === 0);
}

const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let cnt = 0;
for (let i = a; i <= b; i++) {
    if (is369Number(i)) {
        cnt++;
    }
}

console.log(cnt);