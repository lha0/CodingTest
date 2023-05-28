const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let input = [];
  
  rl.on('line', function (line) {
     input.push(line)
  })
    .on('close', function () {
    
    input = [...new Set(input)];
    input = input.slice(1);

    let sorting = input.sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
    })

    let answer = '';

    for (let i = 1; i <= sorting[sorting.length-1].length; i++) {
      let temp = sorting.filter((e) => e.length === i)
      temp = temp.sort();
      temp.forEach(v => answer += v + '\n');
    }

    console.log(answer)
    
    process.exit();
  });