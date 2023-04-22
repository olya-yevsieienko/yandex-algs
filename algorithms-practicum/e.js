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
  const [n, numbers, sum] = _inputLines;
  const nums = getArray(numbers);
  const S = +sum;
  
  let answer = 'None';
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
      const y = S - x;
      
      if(map.has(y)) {
        answer = `${y} ${x}`;
      }
      map.set(x, i);
  }

  console.log(answer);
}

function getArray(str) {
  return str.split(' ').map(Number);
}