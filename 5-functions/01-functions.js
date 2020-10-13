// * DECLARATION
// function hi() {
//     console.log("Hi")
// }

// hi();

// * EXPRESSIONS
// let hello = function() {
//     console.log("Hey!");
// }
// hello();

// * FUNCTION EXAMPLES
// 1:
// function addIt() {
//     console.log(5+10);
// }
// addIt();

//2:
// function counting() {
//     for (i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }
// counting();

// CHALLENGE
//***********************

//- Given the array, create a function that lists out the values individually.
// let arr = ['This', 'is', 'really', 'cool'];
// function individually() {
//     for (i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }  
// }
// individually();

// function arrList() {
//     for (item of arr) {
//         console.log(item);
//     }
// }
// arrList();

function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());