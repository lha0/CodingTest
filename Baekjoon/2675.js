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
        let num = input[i].split(" ")[0]-'';
        let str = input[i].split(" ")[1];
        answer += [...str].map(v => v.repeat(num)).join('');
        answer += '\n';
    }
    console.log(answer)
  process.exit();
});