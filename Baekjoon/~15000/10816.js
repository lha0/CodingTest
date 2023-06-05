const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N =  input[0]-'';
let have = input[1].split(" ").map(v => +v);
const M = input[2]-'';
let card = input[3].split(" ").map(v => +v);

let haveObj = {};
for (let i = 0; i < N; i++) {
  if (!haveObj[have[i]]) haveObj[have[i]] = 1;
  else haveObj[have[i]]++;
}

let haveKeys = Object.keys(haveObj).sort((a, b) => a-b);
let answer = [];

for (let i = 0; i < M; i++) {
  let find = card[i];
  let min = 0;
  let max = haveKeys.length-1;
  let mid = 0;
  let flag = false;

  while (min <= max) {
    mid = parseInt((min + max) / 2);
    if (haveKeys[mid] < find) min = mid+1;
    else if (haveKeys[mid] > find)  max = mid-1;
    else if (haveKeys[mid] == find) {flag = true; break;}
  }

  flag ? answer.push(haveObj[haveKeys[mid]]) : answer.push(0);
}

console.log(answer.join(" "));