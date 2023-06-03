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
  let N = input[0]-'';
  let answer = '';
  for (let i = 1; i <= N; i++) {
    let cur = input[i];
    let regex = /\(\)/g;
    while (cur.match(regex)) {
      cur = cur.replace(regex, "");
    }
    cur ? answer += "NO\n" : answer += "YES\n";
  }
  console.log(answer)
});