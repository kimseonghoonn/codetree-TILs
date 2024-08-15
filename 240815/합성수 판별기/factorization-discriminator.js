const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

for(let i=2; i<n; i++) {
    if (n%i!=0) {
        continue
    }
    else if(i==(n-1)) {
        console.log("N")
    }
    else {
        console.log("C")
        break
    }
}