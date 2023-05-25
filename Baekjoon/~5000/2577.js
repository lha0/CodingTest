const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  
  rl.on('line', function (line) {
     input.push(line)
  })
    .on('close', function () {
     let result = (input[0]-'') * (input[1]-'') * (input[2]-'');
     for (let i = 0; i < 10; i++) {
        console.log([...(result+'')].filter(v => v == i+'').length)
     }
     process.exit();
  });