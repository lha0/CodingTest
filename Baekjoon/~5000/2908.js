const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  
  rl.on('line', function (line) {
     input.push(line)
  })
    .on('close', function () {
     let one = input[0].split(" ")[0].split("").reverse().join('');
     let two = input[0].split(" ")[1].split("").reverse().join('');
     one > two ? console.log(one) : console.log(two);
     process.exit();
  });