const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = input.shift()-'';
const A = input.shift().split(" ").map(Number);

let sorted = [...A].sort((a, b) => a-b);
let answer = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (A[i] == sorted[j]) {
            answer.push(j);
            sorted[j] = 1001;
            break;
        }
    }
}

console.log(answer.join(' '));