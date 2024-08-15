const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let i=0

while(true) {
  if(n[i]==1) {
    console.log("John")
  }
  else if(n[i]==2) {
    console.log("Tom")
  }
  else if (n[i]==3) {
    console.log("Paul")
  }
  else if (n[i]==4) {
    console.log("Sam")
  }
  else {
    console.log("Vacancy")
    break
  }
  i++
}