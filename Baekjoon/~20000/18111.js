const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;

let [N, M, B] = input.shift().split(" ").map(Number);

let map = input.map(v => v.split(" ").map(Number));

let answerTime = Infinity;
let answerHeight = 0;
for (let h = 0; h <= 256; h++) {
    let inventory = B;
    let time = 0;
    let remove = 0;
    let add = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            let curBlock = map[i][j];

            if (h > curBlock) {
                add += h - curBlock;
                inventory -= h - curBlock;
            } else {
                remove += curBlock - h;
                inventory += curBlock - h;
            } 
        }
    }
    if (inventory >= 0) {
        time = remove * 2 + add;
        if (answerTime > time) {
            answerTime = time;
            answerHeight = h;
        }
    }
}

console.log(answerTime, answerHeight);