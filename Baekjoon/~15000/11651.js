const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;

let N = input.shift();
let arr = input.sort((a, b) => {
    if (Number(a.split(" ")[1]) == Number(b.split(" ")[1])) 
        return Number(a.split(" ")[0]) - Number(b.split(" ")[0]);
   return Number(a.split(" ")[1]) - Number(b.split(" ")[1]);
})

console.log(arr.join('\n'));