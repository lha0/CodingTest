const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let star = '*';
for (let i = 1; i <= input-''; i++) {
    console.log(star);
    star += '*';
}