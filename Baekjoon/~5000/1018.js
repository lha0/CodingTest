const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0].split(" ")[0]-'';
const M = input[0].split(" ")[1]-'';
const whiteFirst = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW']
const blackFirst = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']
let board = input.slice(1).map(v => v.split(''));

let answer = 100;
let min = 0;

function checkBoard(col, row) {
  let checkWhite = 0;
  let checkBlack = 0;

  for (let i = row; i < row+8; i++) {
    for (let j = col; j < col+8; j++) {
      if (board[i][j] != whiteFirst[i-row][j-col])
        checkWhite++;
      if (board[i][j] != blackFirst[i-row][j-col])
        checkBlack++;
    }
  }

  min = Math.min(checkWhite, checkBlack);
  if (min < answer) answer = min;
}

for (let i = 0; i <= M-8; i++) {
  for (let j = 0; j <= N-8; j++) {
    checkBoard(i, j);
  }
}

console.log(answer);