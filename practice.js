// variable and value
// const constant = 0;
// let hamid = constant;
// hamid = 23;
// console.log(hamid); // 23

// -----------------------------------------------

// string
// let hamid = 'Hello, I am single quotes';
// console.log(hamid); // "Hello, I am single quotes"

// let hamed = "Hello, I'm double quotes";
// console.log(hamed); // "Hello, I'm double quotes"

// let ali = `Hello, I'm backticks`;
// console.log(ali); // "Hello, I'm backticks"

// let lt = "template literal";
// let reza = `Hello, I'm ${lt}`;
// console.log(reza); // "Hello, I'm template literal"

// let majid = ` Hello, I'm also
// can be multiline.

// it's great for everyone :)`;
// console.log(majid);
// /*" Hello, I'm also
// can be multiline.

// it's great for everyone :)" */


// let majid = " Hello, I'm also\n can be multiline. it's\n\n great for everyone :)"
// console.log(majid);
// /**" Hello, I'm also
//  can be multiline. it's

//  great for everyone :)" */


// let majid = ` Hello, I'm also
//                 can be multiline.

// it's great for everyone :)`;
// console.log(majid);
// /** Hello, I'm also
//                 can be multiline.

// it's great for everyone :) */

// -----------------------------------------------

// function
// function hamid() {
//     console.log("Call me!");
// }

// hamid(); // "Call me!"


// function add(num1, num2) {
//     const result = (num1 + num2);
//     return result;
// }

// let result = add(15, 8);
// console.log(result); // 23

// -----------------------------------------------

// shadow variable
// let userName = "Hamid";
// function User(name) {
//     let userName = name;
//     console.log(name);
// }

// userName = 'Hamed';
// User('Hamid'); // "Hamid"

// -----------------------------------------------

// convert data types
// let input = prompt("input a value");
// let number = 23;

// function add() {
//     return console.log(input + number);
// }

// add(); // 2323


// let input = prompt("input a value");
// let number = 23;

// function add() {
//     return console.log(parseInt(input) + number);
// }

// add(); // 46


let input = prompt("input a value"); // "23"
let number = 23;

function add() {
    return console.log(+input + number);
}

add(); // 46