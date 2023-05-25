const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
   input.push(line)
})
  .on('close', function () {
   let l = input[0].toLowerCase().split("");
   let obj = {};
   for (let i = 0; i < l.length; i++) {
        if (!obj[l[i]]) obj[l[i]] = 1;
        else obj[l[i]]++;
   }
   let max = Math.max(...Object.values(obj));
   let answer = '';
   Object.keys(obj).map((v) => obj[v] == max ? answer += v.toUpperCase() : null);
   answer.length > 1 ? console.log("?") : console.log(answer);
});