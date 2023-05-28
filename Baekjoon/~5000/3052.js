const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  
  rl.on('line', function (line) {
     input.push(line)
  })
    .on('close', function () {
     let answer = [...new Set(input.map(v => (v-'')%42))];
     console.log(answer.length)

      process.exit()
  });