//vscode에서 풀 때는 'example.txt' , 백준에 올릴 때는 /dev/stdin

const fs = require("fs");
const input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);

const standard = [1, 1, 2, 2, 2, 8];
let answer = standard.map((v, i) => v - input[i]);
console.log(answer.join(" "));




/*
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const standard = [1, 1, 2, 2, 2, 8];
let answer = standard.map((v, i) => v - input[i]);
console.log(answer.join(" "));


*/
