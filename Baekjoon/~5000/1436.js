const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  
  rl.on('line', function (line) {
     input.push(line)
  })
    .on('close', function () {
    let N = input[0]-'';
    let start = 665;
    while (N !== 0) {
      start++;
      if (String(start).includes("666"))  N--;
    }
    console.log(start)

    process.exit();
  });