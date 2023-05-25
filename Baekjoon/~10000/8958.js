const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    let answer = '';
    for (let i = 1; i <= input[0]-''; i++) {
        let cur = input[i].split('');
        let score_o = 1;
        let score = 0;
        for (let i = 0; i < cur.length; i++) {
            if (cur[i] == 'O' && i == 0)    score += 1;
            else if (cur[i] == "O" && cur[i-1] == "O") {
                score_o++;
                score += score_o;
            }
            else if (cur[i] == "O" && cur[i-1] == "X")  {
                score_o = 1;
                score += score_o;
            }
            else continue;
        }
        answer += score + '\n';
    }
    console.log(answer);
  process.exit();
});