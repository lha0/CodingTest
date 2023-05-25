const fs = require('fs');
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ")
const X = n.split(" ")[1];

let answer = '';
for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i]-'' < X) answer += inputArr[i]-'' + ' ';
}
console.log(answer);