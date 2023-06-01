const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let first = input[0] - '';
let second = input[1] - '';
let lcd = first * second;
let mod = 10;
while (mod != 0) {
  mod = first % second;
  first = second;
  second = mod;
}
let gcd = first;
lcd = lcd / gcd;
console.log(gcd);
console.log(lcd);