let sent = 'This sentence will be split into individual parts';

let arr = sent.split();
let arr1 = sent.split(' ');
let arr2 = sent.split(' ', 5);
let arr3 = sent.split('s');

console.log(sent.split(' '))
console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);