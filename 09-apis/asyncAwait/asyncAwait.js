/*
v --- returns a promise
fetch()
    .then() // if you use one callback, then is on Fulfilled
    .then(x, y) // x will happen if Fulfilled
                y will happen if Rejected
    .catch(x) // this will happen if Rejected

fetch().then(x<ifworked>, y<if failed>)

fetch()
    .then(x) < if it worked
    .catch(x) < if it failed

const result = await fetch();
const json = await result.json();
console.log(json)
*/

const request = async () => {
    const response = await fetch('https://random.dog/woof.json');
    const json = await response.json();
    return json
}

request().then(json => {
    console.log;
})