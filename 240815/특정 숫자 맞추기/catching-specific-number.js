const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let i=0

while(true) {
  if(n[i]<25) {
    console.log("Higher")
  }
  else if(n[i]>25) {
    console.log("Lower")
  }
  else if (n[i]==25) {
    console.log("Good")
    break
  }
  i++
}