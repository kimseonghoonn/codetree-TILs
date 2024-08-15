const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let i=0

while(true) {
  console.log(n[i])
  i++
  if (n[i]==0) {
    break
  }
}