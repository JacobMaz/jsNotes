// let student = {
//     name: "Jacob",
//     awesome: false,
//     degree: "JavaScript",
//     week: 1
// }

// for (item in student) {
//     console.log(item);
//     console.log(student[item]);
// }

// let cats = ["tabby", "british shorthair", "burmese"]
// for (cat in cats) {
//     console.log(cat);
//     console.log(cats[cat]);
// }

/*
CHALLENGE
*********
-write a for in loop that capitalizes the first letter of a name,
and lowercases the rest of the name
BONUS!!!
try to make fist letter in last name cap and rest lower case
*/
let name = "jaCOb MAzanoWskI"
let capName;

for (let i in name){
    if (i == 0) {
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }
}
console.log(capName)