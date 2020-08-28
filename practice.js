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

// let input = prompt("input a value"); // "23"
// let number = 23;

// function add() {
//     return console.log(+input + number);
// }

// add(); // 46

// -----------------------------------------------

// array and object
// let array = [2, 3, 4];
// let object = { name1: "Hamid", age: 23, name2: "Hamed", age: 23 };

// console.log(array); // [ 2, 3, 4 ]
// console.log(object); // { name1: 'Hamid', age: 23, name2: 'Hamed' }

// let obj = { love: love };

// -----------------------------------------------

// typeof
// let n = 23;
// let s = "Hamid";
// let a = [2, 3, 5];
// let o = { name: "hamid", age: 23 };

// console.log(typeof n); // "number"
// console.log(typeof s); // "string"
// console.log(typeof a); // "object"
// console.log(typeof o); // "object"
// console.log("-----------");
// console.log(typeof null); // "object"
// console.log(typeof undefined); // "undefined"
// console.log(typeof NaN); // "number"

// -----------------------------------------------

// condition
// const isTrue = true;
// if (isTrue) {
//     console.log("OK!"); // "OK!"
// }

// const isTrue = true;
// if (isTrue === true) {
//     console.log("OK!"); // "OK!"
// }

// const isTrue = true;
// if (!isTrue) {
//     // This code will NOT execute because isTrue is true but ! inverts it (in this check)
// } else {
//     // This would execute because !isTrue yields false => else block executes
// }

// const isTrue = true;
// if (isTrue !== true) {
//     // This would NOT execute
// } else {
//     // This would execute because isTrue is true and hence !== true yields false
// }

// console.log('ab' > 'aa'); // true
// console.log('a' > 'B'); // true
// console.log('a' > 'b'); // false

// let obj1 = {name: "Hamid"};
// let obj2 = {name: "Hamid"};

// console.log(obj1 == obj2); // false
// console.log(obj1 === obj2); // false

// console.log(obj1 != obj2); // true
// console.log(obj1 !== obj2); // true

// let obj1 = {name: "Hamid"};
// let obj2 = {name: "Hamid"};

// console.log(obj1.name == obj2.name); // true
// console.log(obj1.name === obj2.name); // true

// console.log(obj1.name != obj2.name); // false
// console.log(obj1.name !== obj2.name); // false1

// let array1 = [1, 2, 3];
// let array2 = [1, 2, 3];

// console.log(array1 == array2); // false
// console.log(array1 === array2); // false

// console.log(array1 != array2); // true
// console.log(array1 !== array2); // true

// let array1 = [1, 2, 3];
// let array2 = [1, 2, 3];

// console.log(array1[0] == array2[0]); // true
// console.log(array1[0] === array2[0]); // true

// console.log(array1[0] != array2[0]); // false
// console.log(array1[0] !== array2[0]); // false

// -----------------------------------------------

// trthy and falsy
// let name = "Hamid";
// if (name) {
//     console.log("Works"); // truthy -- "Works"
// }

// let name = "";
// if (name) {
//     console.log("Works"); // falsy -- not shown
// }

// -----------------------------------------------

// if statement
// let number = 0;

// while(true){
//     number++;
//     if(number >= 10) {
//         console.log(number); // 10
//         break;
//     }
// }

// let name = "Hamed";

// if (name === "Hamid") {
//     console.log("True!");
// } else {
//     console.log("False!"); // "False!"
// }

// -----------------------------------------------

// ternary operator
// const name = if (isTrue) { // not work
//   return "Hamid";
// } else {
//   return null;
// }

// const name = isTrue ? "Hamid" : null;

// -----------------------------------------------

// !! operator
// let userInput = "";
// const name = userInput ? "Hamid" : null;
// console.log(name); // "null"
// const name = !!userInput; // false

// -----------------------------------------------

// || operator
// let firstName = "" || "Hamid";
// console.log(firstName); // "Hamid"

// let lastName = "Alavi" || "Willson";
// console.log(lastName); // "Alavi"

// let name = "" || "Hamed" || "Ali";
// console.log(name); // "Hamed"

// let name = false || NaN || "Hamid";
// console.log(name); // "Hamed"

// let name = true || NaN || "Hamid";
// console.log(name); // true

// -----------------------------------------------

// && operator
// let firstName = "" && "Hamid";
// console.log(firstName); // ""

// let lastName = "Alavi" && "Willson";
// console.log(lastName); // "Willson"

// let valid = false && false && true;
// console.log(valid); // false

// let valid = "" && "Hamed" && "Ali";
// console.log(valid); // ""

// let valid = false && NaN && "Hamid";
// console.log(valid); // false

// let valid = true && "Reza" && "Mehrdad";
// console.log(valid); // "Mehrdad"

// -----------------------------------------------

// switch-case statement
// let day = 4;

// if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("Tuesday");
// } else if (day === 3) {
//   console.log("Wednesday");
// } else if (day === 4) {
//   console.log("Thursday");
// } else if (day === 5) {
//   console.log("Friday");
// } else if (day === 6) {
//   console.log("Saturday");
// } else if (day === 7) {
//   console.log("Sunday");
// } else {
//   console.log("INVALID");
// }

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("INVALID");
// }

// -----------------------------------------------

// for loop
// for (let i = 0; i < 10; i++) {
//   console.log(i); // 1 2 3 4 5 6 7 8 9
// }

// for (;;) {
//   console.log("Hello");
// }

// -----------------------------------------------

// for..of loop
// let array = ["Hamid", "Alavi"];
// for (const info of array) {
//   console.log(info); // "Hamid" "Alavi"
// }

// let name = "Hamid";
// for (const char of name) {
//   console.log(char); // "H" "a" "m" "i" "d"
// }

// let array = [23, 45, 67, 89];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]); // 23 45 67 89
// }

// let array = [23, 45, 67, 89];
// for (const i of array) {
//   console.log(i); // 23 45 67 89
// }

// let object = { name: "Hamid", age: 23 };
// for (const val of object) {
//   console.log(val); // TypeError: object is not iterable
// }
