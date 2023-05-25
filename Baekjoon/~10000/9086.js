const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
})
  .on('close', function () {
  let answer = '';
  for (let i = 1; i < input.length; i++) {
    answer += input[i][0];
    answer += input[i][input[i].length-1];
    answer += '\n';
  }
  console.log(answer);
  process.exit();
});