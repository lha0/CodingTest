const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = input[0]-'';
let arr = input.map(v => +v).slice(1).sort((a, b)=>a-b);
let max = Math.max(...arr);
let min = Math.min(...arr);
let answer = '';

  let mean = Math.round(arr.reduce((a, c) => a+c, 0) / n);
  let mid = arr[parseInt(n/2)];
  let mostObj = {};
  arr.forEach(v => {
    if (!mostObj[v]) mostObj[v] = 1;
    else mostObj[v]++;
  })
  let mostValue = Math.max(...Object.values(mostObj));
  let mostKey = Object.keys(mostObj).filter(v => mostObj[v] == mostValue).sort((a, b) => a-b);
  let most = 0;
  mostKey.length == 1 ? most = mostKey[0] : most = mostKey[1];
  let range = max - min;

  answer += mean + '\n' + mid + '\n' + most + '\n' + range;
  console.log(answer);