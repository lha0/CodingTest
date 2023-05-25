const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
   input.push(line)
})
  .on('close', function () {
   let num = input[0]-'';
   let min = 1000001;
   let max = -1000001;
   let prob = input[1].split(" ");
   for (let i = 0; i < num; i++) {
    if (prob[i]-'' < min)   min = prob[i]-'';
    if (prob[i]-'' > max)   max = prob[i]-'';
   } 
   console.log(min + " " + max);
   process.exit();
});