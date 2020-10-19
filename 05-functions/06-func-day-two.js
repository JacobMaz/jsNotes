// function greet() {
//     console.log("hello");
// }

// let sayhi = () => console.log("Hi")

// let hello = () => {
//     console.log("Hello!");
// }

// let greetings = function() {
//     console.log("Greetings");
// }

// aList = ["justin", "Ahmann"]

// function printList() {
//     console.log(aList);
// }
// printList();

// function betterPrint(listParam) {
//     console.log(listParam);
// }
// betterPrint(aList);

// // 
// function printName(name) {
//     console.log(name);
// }
// printName("Jake");
// printName("Justin");
// // same idea as saying: name = "Jake"

// Challenge
// ***********
// plug in 20 where it is used in the code

// functon varloop(20)
// function varLoop(n) {
//     // for(let i = 1; i <= 20; i++)
//     for(let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }

// varLoop(20)

// Make a functoin that takes in 3 things
// and prints them on seperate lines
function multiPrint(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
function listPrint(wordList){
    // for (word in wordList){
    //     console.log(wordList[word]);
    // }
    for (word of wordList){
        console.log(word)
    }
}
listPrint(["Justin", "Adam", "Amy", "Joe"])