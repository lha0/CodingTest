const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  
  rl.on('line', function (line) {
     input.push(line)
  })
    .on('close', function () {
     let H = input[0].split(" ")[0]-'';
     let M = input[0].split(" ")[1]-'';
     if (M - 45 < 0)  {
      M += 15;
      H == 0 ? H = 23 : H--;
     } else {
      M -= 45;
     }
     console.log(H, M);
     process.exit();
  });