const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;

let N = input.shift()-'';
const breakNum = input.shift()-'';
let breakCh = [];
if (breakNum != 0)  breakCh = input.shift().split(" ");
let init = 100;

let gap = Math.abs(N - init);
let answer = gap;

for (let move = 0; move <= 999900; move++) {
    if (N == 100) {break;}
    let moveStr = String(move);
    let possible = true;
    for (let j = 0; j < moveStr.length; j++) {
        if (breakCh.includes(moveStr[j])) {
            possible = false;
            break;
        }
    }

    if (possible) {
        if (Math.abs(N-move) < gap) {

            let pressMin = moveStr.length + Math.abs(N-move);
            if (pressMin < answer) {
                gap = Math.abs(N-move);
                answer = pressMin;
            }

        } else {
            continue;
        }
    }
}

console.log(answer);