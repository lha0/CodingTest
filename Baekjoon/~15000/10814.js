const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N =  input.shift();
let copy = input;

copy = copy.sort((a, b) => {
  if (a.split(" ")[0]-'' < b.split(" ")[0]-'') return (a.split(" ")[0]-'')-(b.split(" ")[0]-'');
})  

console.log(copy.join('\n'));