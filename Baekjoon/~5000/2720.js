const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = input[0]-'';
let answer = '';
for (let i = 1; i <= T; i++) {
  let curMoney = input[i]-'';
  let maxQ = parseInt(curMoney / 25);
  let secondMoney = curMoney % 25;
  let maxD = parseInt(secondMoney / 10);
  let thirdMoney = secondMoney % 10;
  let maxN = parseInt(thirdMoney / 5);
  let fourthMoney = thirdMoney % 5;
  let maxP = parseInt(fourthMoney / 1);

  answer += maxQ + " " + maxD + " " + maxN + " " + maxP + '\n';
}
console.log(answer);