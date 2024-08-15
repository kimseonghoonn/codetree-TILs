const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let count=0

for(let i=1; i<=100; i++) {
     if(parseInt(n/i) > 0) {
        n = parseInt(n/i);
        count++;
    }else{
        count++; 
        break;
    }
}