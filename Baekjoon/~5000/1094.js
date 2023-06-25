const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim()-'';

let line = [64];
let sum = 64;
while (sum > input) {
    let min = Math.min(line.pop());
    line.push(min/2);

    if (line.reduce((a, c) => a+c, 0) >= input){
        sum = line.reduce((a, c) => a+c, 0);
    } else {
        line.push(min/2);
        sum = line.reduce((a, c) => a+c, 0);
    }
}

console.log(line.length);