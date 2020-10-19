// let myname = "Jacob"
// let name = "Jacob"

// // if (name == "Jacob") {
// //     console.log("Jacob")
// // } else {
// //     console.log("Hello, what is your name?")
// // }

// if (name == "Jacob") {
//     console.log(`Hello, my name is ${myname}!`);
// } else {
//     console.log(`I thought your name was ${myname}?`);
// };

// Dot notation

// let student = {
//     name : "Jacob",
//     grade : 12
// };
// //was to access an object
// console.log(student.name);
// console.log(student["name"])

// let names = [
//     "Justin",
//     "Adam",
//     "Amy"
// ]
// //Ways of accessing an array
// // console.log(names[2])
// //

// let fruit = ["apple", "orange"]
// let apple = fruit[0]

// console.log(apple);
// console.log(name.slice(1,3));

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/


// let name = "zAchARy";

//BRONZE:
// console.log(name[0])

// if (name[0] == name[0].toUpperCase()) {
//     console.log(name);
// } else {
//     console.log("Hey, this isn't writen correctly!");
// };
//SILVER:
// if (name[0] == name[0].toUpperCase) {
//     console.log(name[0])
// } else {
//     console.log(name.slice(1).toLowerCase())
// };
//GOLD:
// if (name[0] == name[0].toUpperCase()) {
//     let isUpperCase = name[0] + name.slice(1).toLowerCase();
//     console.log("console log #1:", isUpperCase)
// } else {
//     let notUpperCase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     console.log("console log #2:", notUpperCase);
// };

// let officeCharacter = "Pam";

// switch (officeCharacter) {
//     // if officeCharacter == "Michael"
//     case "Michael":
//         console.log("My mind is going a mile an hour");
//         break; //break will leave the switch after the block runs
//     case "Dwight":
//         console.log("Question???");
//         break;
//     case "Jim":
//         console.log("Bears. Beets. Battlestar Galactica");
//         break;
//     default:
//         console.log(`I'm Sorry, ${officeCharacter}, but do I know you?`);
// };

// let dessert = "carrots";

// switch (dessert) {
//     case "pie":
//         console.log("Pie, Pie, me oh my!");
//         break;
//     case "case":
//         console.log("Cake is GREAT!")
//         break;
//     case "ice cream":
//         console.log("I scream for ice cream!");
//         break;
//     default:
//         console.log("Not on the menu.");
// };

// // else if
// if (dessert == "cake") {
//     console.log("Cake is great!");
// } else if (dessert == "ice cream") {
//     console.log("I scream for ice cream!");
// } else {
//     console.log("Not on the menu.")
// };

// Ternary

// let num = 6;

// // () ? true : false

// (num > 0) ? console.log("yes") : console.log("no");

