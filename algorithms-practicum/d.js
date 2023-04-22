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

  	for (let i = 0; i < nums.length; i++) {
    	for (let j = i + 1; j < nums.length; j++) {
        	if (nums[i] + nums[j] === S) {
        		answer = `${nums[i]} ${nums[j]}`;
      		}
    	}
    }

  	console.log(answer);
}

function getArray(str) {
  return str.split(' ').map(Number);
}