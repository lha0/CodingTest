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
    input = input[0].split(" ").map(v => v-'');
    let asc = [...input].sort((a, b) => a-b);
    let dsc = [...input].sort((a, b) => b-a);

    if (JSON.stringify(input) == JSON.stringify(asc))   console.log("ascending");
    else if (JSON.stringify(input) == JSON.stringify(dsc))  console.log("descending");
    else console.log("mixed");
    process.exit();
});