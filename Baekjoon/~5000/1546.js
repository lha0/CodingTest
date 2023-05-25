const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  
  rl.on('line', function (line) {
     input.push(line)
  })
    .on('close', function () {
     let num = input[0]-'';
     let score = input[1].split(" ").map(v => v - '');
     let max = Math.max(...score);
     console.log(score.map(v => v / max * 100).reduce((a, c) => a+c, 0) / num);
     process.exit()
  });