const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  
  rl.on('line', function (line) {
     input.push(line)
  })
    .on('close', function () {
     let num = (input[0]-'');
     let answer = '';
     for (let i = num; i > 0; i--) {
        answer += i + '\n'
     }
     console.log(answer);
    process.exit();
  });