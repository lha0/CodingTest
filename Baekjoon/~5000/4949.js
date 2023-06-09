const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;

let index = 0;
let answer = [];
while (input[index] != '.') {
    let cur = input[index];
    let stack = [];
    let flag = true;

    for (let i = 0; i < cur.length; i++) {
        if (cur[i] == "(" || cur[i] == "[") {
            stack.push(cur[i]);
        } else if (cur[i] == ")") {
            if (stack[stack.length-1] == "(")   stack.pop();
            else {flag = false; break;}
        } else if (cur[i] == "]") {
            if (stack[stack.length-1] == "[")   stack.pop();
            else {flag = false; break;}
        } else continue;
    }

    (stack.length > 0 || !flag) ? answer.push("no") : answer.push("yes");
    index++;
}

console.log(answer.join("\n"));