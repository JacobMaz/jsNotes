// let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese cake", "Hotdog"];

// food.push("Pizza");
// console.log("push.", food);

// food.splice(1, 1, "Bananas");
// console.log(".splice1:", food);

// food.splice(2, 0, "Sweet Potato Pie");
// console.log(".splice2:", food);

// food.splice(0, 3, "Turkey");
// console.log(".splice3:", food);

// food.pop();
// console.log(".pop:", food);

// food.shift();
// console.log(".shift:", food);

// food.unshift("Popcorn", "Steak");
// console.log(".unshift", food);

//// let dogs = ["Shiba Inu", "Greyhound", "Shih Tzu", "German Shepherd"];

//// dogs.push("Great Dane");
//// dogs.unshift("Bull Terrier", "Husky");

//// console.log(dogs);



// regular for loop

// let dogs = ["Shiba Inu", "Greyhound", "Shih Tzu", "German Shepherd"];

// for (i = 0; i < dogs.length; i++) {
//     console.log(dogs[i]);
// }

// forEach()
// dogs.forEach(dog => console.log(dog));

// dogs.forEach(function(dog) {
//     console.log(dog);
// });

// dogs.forEach((dog, index) => {
//     console.log(dog);
//     console.log(index);
// });


//CHALLENGE
//************ */
// - (Go look at MDN docs to remind you):
// - Create an array containing movies
// - Use .forEach() to list your movies
// - Add another movie at the end
// - And replace one of your existing movies with another one

// let movies = ["The Princess Bride", "I Love You Man", "Harry Potter", "Tommy Boy"];

// movies.forEach(movie => console.log(movie));

// movies.push("Smart House");
// console.log(movies);

// movies.splice(2, 1, "Shrek");
// console.log(movies);

// let arr = [1, 2, 3, 4, 5];

// if (arr instanceof Array) {
//     let revArr = arr.reverse();
//     revArr.forEach(num => console.log(num));
// } else {
//     console.log("not an array");
// }