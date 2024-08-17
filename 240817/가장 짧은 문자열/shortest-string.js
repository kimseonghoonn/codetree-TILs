const fs = require("fs")

let [str1 , str2, str3] = fs.readFileSync(0).toString().trim().split("\n")

let len1 = str1.length
let len2 = str2.length
let len3 = str3.length

if (len1 > len2) {
    if(len2>len3) {
       console.log(len3) 
    }
}