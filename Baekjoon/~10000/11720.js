const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
   input.push(line)
})
  .on('close', function () {
   let l = input[1].split("");
   console.log(l.reduce((a, c) => a + Number(c), 0));
   process.exit();
});