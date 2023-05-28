const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  
  rl.on('line', function (line) {
     input.push(line)
  })
    .on('close', function () {
    let x = input[0].split(" ")[0] -'';
    let y = input[0].split(" ")[1] -'';
    let w = input[0].split(" ")[2] -'';
    let h = input[0].split(" ")[3] -'';
     
    let arr = [x, y, w-x, h-y];
    console.log(Math.min(...arr))
     process.exit();
  });