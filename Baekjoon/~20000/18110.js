const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;

let N = input.shift()-'';
let cut = Math.round(N * 0.15);

let arr = input.sort((a, b) => Number(a)-Number(b));
arr = arr.slice(cut, input.length-cut).map(v => +v);

let answer = Math.round(arr.reduce((a, c) => a+c, 0) / arr.length);
N == 0 ? console.log(0) : console.log(answer);