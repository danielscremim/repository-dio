
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
   
console.log('X = ' + (a+b));

/*
var a = 10;
var b = 9;

let x = (a + b)

console.log(`X = ${x}`)
*/



