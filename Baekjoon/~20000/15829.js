const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;

let N = input.shift()-'';
let score = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9,
            'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16, 'q':17,
            'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25, 'z':26};

let alphabet = input[0].split('');
let sum = 0;
let r = 1;
for (let i = 0; i < alphabet.length; i++) {
    sum += score[alphabet[i]] * r;
    r = r * 31 % 1234567891;
}

console.log(sum % 1234567891);