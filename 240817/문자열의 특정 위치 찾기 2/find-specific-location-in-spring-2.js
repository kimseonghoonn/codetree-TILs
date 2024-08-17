const fs = require('fs');
let a = fs.readFileSync(0).toString().trim()

arr = ["apple", "banana", "grape", "blueberry", "orange"]
let count=0

for (let i=0; i<5; i++) {
    if (arr[i][2] == a || arr[i][3] == a) {
        console.log(arr[i])
        count++
    }
}
console.log(count)