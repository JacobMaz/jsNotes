// - write a for loop running between the numbers 0 - 100
//     - for multiples of 3, instead of the number, console.log "Fizz"
//     - for multiples of 5 console.log "Buzz";
//     - for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
//     - for any other number, console.log the value

// for (let i = 0; i <= 100; i++) {
//     if (i % 15 == 0) {
//         console.log("FuzzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

for (let i = 0; i < 101; i++) {
    switch (true) {
        case (i % 15 == 0):
            console.log("FizzBuzz");
            break;
        case (i % 3 == 0):
            console.log("Fizz");
            break;
        case (i % 5 == 0):
            console.log("Buzz");
            break;
        default:
            console.log(i);
        }
    }

    // for (FB = 0; FB <= 100; FB++){
    //     (FB % 15 == 0) ? console.log('Fizz Buzz') :
    //     (FB % 5 == 0) ? console.log('Buzz') :
    //     (FB % 3 == 0) ? console.log('Fizz'):
    //     console.log(FB);
    //     }