const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const TC = input.shift()-'';
let answer = [];
for (let c = 0; c < TC; c++) {
    let [N, M] = input[c].split(" ").map(Number);
    const memo = Array.from(Array(30), () => new Array(30).fill(0));

    for (let i = 1; i <= N; i++) {
        for (let j = i; j <= M; j++) {
            if (i == j) memo[i][j] = 1;
            else if (i == 1)    memo[i][j] = j;
            else {
                let sum = 0;
                for (let k = 1; k < j; k++) {
                    sum += memo[i-1][k];
                }
                memo[i][j] = sum;
            }
            
        }
    }

    answer.push(memo[N][M]);
}

console.log(answer.join('\n'))