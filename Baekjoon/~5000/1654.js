const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  
  rl.on('line', function (line) {
     input.push(line)
  })
    .on('close', function () {
    let k = input[0].split(" ")[0]-'';
    let N = input[0].split(" ")[1]-'';
    input = input.slice(1);
    let min = 1;
    let line = input.map(v => v-'');
    let max = Math.max(...line);

    while (min <= max) {
      let mid = parseInt((max + min) / 2);
      let sum = line.map(v => parseInt(v / mid)).reduce((a, c) => a+c, 0);

      if (sum < N) max = mid-1;
      else min = mid+1;
    }
    console.log(max)

    process.exit();
  });