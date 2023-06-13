const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;

let N = input.shift()-'';
let answer = '';
let countZero = [1, 0];
let countOne = [0, 1];

for (let i = 0; i < N; i++) {
    let cur = Number(input[i]);

    for (let j = 2; j <= cur; j++) {
        countZero[j] = countZero[j-1] + countZero[j-2];
        countOne[j] = countOne[j-1] + countOne[j-2];
    }

    answer += countZero[cur] + " " + countOne[cur] + '\n';   
}

console.log(answer);