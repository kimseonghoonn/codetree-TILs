const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let str1 = input[0].split(" ").join(""); // 공백 제거
let str2 = input[1].split(" ").join(""); // 공백 제거

let result = str1 + str2;

console.log(result);