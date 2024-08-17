const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let str1 = input[0].split(" ")
let str2 = input[1].split(" ")

let len1 = str1.length
let len2 = str2.length

let str=" "
for (let i=0; i<len1; i++) {
    str+=str1[i]
}
for (let i=0; i<len2; i++) {
    str+=str2[i]
}
console.log(str)