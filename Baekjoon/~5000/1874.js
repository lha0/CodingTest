const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  
  rl.on('line', function (line) {
     input.push(line)
  })
    .on('close', function () {
    let stack = [];
    let n = input[0]-'';
    let num = input.map(v => v-'').slice(1);
    let answer = '';
    
    let count = 1;
    for (let i = 0; i < n; i++) {
      let number = num.shift();
      while (count <= number) {
        stack.push(count++);
        answer += '+\n';
      }

      popNum = stack.pop();
      answer += '-\n';
      if (popNum != number) {
        answer = "NO";
        break;
      } 
    }
    console.log(answer);
    process.exit();
  });