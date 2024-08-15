const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n").map(Number)
let n = Number(input[0])      //n줄 첫번째 줄에 나옴.
let result= 0

for (let i=1; i<=n; i++) {     //그래서 이 개수까지 반복
    let x = Number(input[i])  //x는  
    if(x%2==1 && x%3==0) {
        result +=x
    }
}

console.log(result)