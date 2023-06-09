const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;

let N = input.shift()-'';
let answer = [];
for (let i = 0; i < N; i++) {
    let weight = input[i].split(" ")[0]-'';
    let height = input[i].split(" ")[1]-'';
    let k = 1;  

    for (j = 0; j < N; j++) {
        if (i == j) continue;
        else {
            let compareW = input[j].split(" ")[0]-'';
            let compareH = input[j].split(" ")[1]-'';

            if (weight <compareW && height < compareH) k++;
            else continue;
        }
    }
    answer.push(k);
}

console.log(answer.join(" "));