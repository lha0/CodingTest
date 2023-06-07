const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');;

let A = input[0]-'';
let B = input[1]-'';
let V = input[2]-'';

let climb = V-A;
let day = 1 + Math.ceil(climb / (A-B));

console.log(day);