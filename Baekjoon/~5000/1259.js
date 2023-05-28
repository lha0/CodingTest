const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  
  rl.on('line', function (line) {
     input.push(line)
  })
    .on('close', function () {
    for (let i = 0; i < input.length-1; i++) {
      if (input[i] == [...input[i]].reverse().join(''))
        console.log('yes')
      else
        console.log('no')
    }

    process.exit();
  });