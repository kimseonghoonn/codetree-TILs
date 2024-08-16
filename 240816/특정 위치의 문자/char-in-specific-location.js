let word = [ 'L', 'E', 'B', 'R', 'O', 'S']

let idx = -1

for (let i=0; i<6; i++) {
    if(word[i] == 'L') {
        idx = i
    }
}

if (idx == -1) {
    console.log("None")
}

console.log(idx)