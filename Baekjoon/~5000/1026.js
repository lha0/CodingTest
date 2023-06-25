const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = input.shift()-'';
const A = input.shift().split(" ").map(Number);
const B = input.shift().split(" ").map(Number);

let sortedA = A.sort((a, b) => a-b);
let sortedB = B.sort((a, b) => b-a);

let answer = 0;
for (let i = 0; i < N; i++) {
    answer += sortedA[i] * sortedB[i];
}

console.log(answer);