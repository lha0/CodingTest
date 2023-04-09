//vscode에서 풀 때는 'example.txt' , 백준에 올릴 때는 /dev/stdin
const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

let arr = input[1];
let v = input[2];

console.log(arr.split(' ').filter(e => e === v).length);