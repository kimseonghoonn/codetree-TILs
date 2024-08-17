const fs = require("fs")

let [str1 , str2] = fs.readFileSync(0).toString().trim().split(" ")

let len1 = str1.length
let len2 = str2.length

if (len1 > len2) {
    console.log("Coding" + " " + len1)
}
else if (len1 < len2) {
    console.log("Coding" + " " + len2)
}
else if  (len1 == len2){
    console.log("same")
}