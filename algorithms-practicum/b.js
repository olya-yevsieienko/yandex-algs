const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
  _inputLines.push(line);
});

process.stdin.on('end', solve);

function solve() {
    const [length, str1, str2] = _inputLines;
    let answer = '';
    const arr1 = getArray(str1);
    const arr2 = getArray(str2);
    
    for (let i = 0; i < length; i++) {
    	answer += `${arr1[i]} ${arr2[i]} `;
    }

    answer.slice(0, -1);

    console.log(answer);
}

function getArray(str) {
  return str.split(' ').map(Number);
}
