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
    const [n, numbers, window] = _inputLines;
    const nums = getArray(numbers);
    const k = +window;
    
    const answer = [];
    let currentSum = 0;
    
    for (let i = 0; i < k; i++) {
    	currentSum += nums[i];
    }
    answer.push(currentSum / k);
    
    for (let j = 0; j < nums.length - k; j++) {
    	currentSum -= nums[j];
    	currentSum += nums[j + k];
    	const currentAvg = currentSum / k;
	    answer.push(currentAvg);
    }

    console.log(answer.join(' '));
}

function getArray(str) {
  return str.split(' ').map(Number);
}
