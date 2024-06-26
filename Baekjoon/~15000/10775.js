const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const G = Number(input.shift());
const P = Number(input.shift());
const arrived = input.map(Number);

let link = Array(100001).fill(0);

for (let i = 1; i <= G; i++) {
    link[i] = i;
}

function find(num) {
    if (link[num] == num) return num;
    return (link[num] = find(link[num]));
}

function unite(a, b) {
    a = find(a);
    b = find(b);

    link[a] = b;
}

let count = 0;
for (let i = 0; i < P; i++) {
    c_gi = find(arrived[i]);

    if (c_gi != 0) {
        unite(c_gi, c_gi - 1);
        count += 1;
    } else {
        break;
    }
}

console.log(count);
