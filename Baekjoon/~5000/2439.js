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
     let answer = '';
     for (let i = 1; i < num+1; i++) {
         let star = '';
        for (let j = 0; j < num-i; j++) {
            star += ' ';
        }
        star += '*'.repeat(i);
        answer += star + '\n';
     }
     console.log(answer);
     process.exit();
  });