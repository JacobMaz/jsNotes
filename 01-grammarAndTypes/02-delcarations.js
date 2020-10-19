let a = 2;

  let  b   =   1;
//(1) (2) (3) (4)

// 1 - keyword
// 2 - variable name
// 3 - assignment operator
// 4 - variable value

console.log(a + b);

// var let const
var x = 1;
let y = 2;
const z = 3;

// declaration vs initialization
let n;
console.log(n);

n = 10;
console.log(n);

// let vs const
let today = 'Great!';
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty);

today = 'Lovely!';
console.log(today, elevenFifty);

// elevenFifty = 'Super';  / Cannot reassign a const
console.log(today, elevenFifty);