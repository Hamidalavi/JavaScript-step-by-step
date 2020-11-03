// variable and value
// const constant = 0;
// let hamid = constant;
// hamid = 23;
// console.log(hamid); // 23

// const { Hash, randomBytes, randomFill, pseudoRandomBytes } = require("crypto");
// const { HashedModuleIdsPlugin } = require("webpack");

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

// -----------------------------------------------

// for..in loop
// let object = { name: "Hamid", age: 23 };
// for (let key in object) {
//   console.log(key); // "name" "age"
// }

// let names = ["Hamed", "Hamid", "Ali", "Reza"];
// for (let key in names) {
//   console.log(key); // "0" "1" "2" "3"
// }

// let object = { name: "Hamid", age: 23 };
// for (let key in object) {
//   console.log(object[key]); // "Hamid" "23"
// }

// let object = { name: "Hamid", age: 23 };
// for (let key in object) {
//   console.log(`${key} => ${object[key]}`); // "Hamid" "23"
// }
// /* "name => Hamid"
//    "age => 23"
//  */

// -----------------------------------------------

// while loop
// let i = 0;
// while (true) {
//   console.log(i);
//   i++; // --infinity
// }

// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++; // 0 1 2
// }

// let i = 0;
// do {
//   console.log(i); // 0 1 2
//   i++;
// } while (i < 3);

// do {
//   // do something
// } while (condition); // <-- see the semicolon

// -----------------------------------------------

// break
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i); // 1 2 3 4
// }

// -----------------------------------------------

// continue
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i); // 1 2 3 4 6 7 8 9
// }

// -----------------------------------------------

// label statement
// let number = 0;
// whileLoop: do {
//   console.log(number); // 0 1 2 3 4
//   if (number === 4) {
//     break whileLoop;
//   }
//   number++;
// } while (number < 10);

// -----------------------------------------------

// nested loops and conditions
// for (let i = 0; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(`i: ${i}`, `j: ${j}`);
//   }
// }
// /* output:
// i: 0 j: 1
// i: 0 j: 2
// i: 0 j: 3
// i: 0 j: 4
// i: 0 j: 5
// i: 0 j: 6
// i: 0 j: 7
// i: 0 j: 8
// i: 0 j: 9
// i: 1 j: 1
// i: 1 j: 2
// i: 1 j: 3
// i: 1 j: 4
// i: 1 j: 5
// i: 1 j: 6
// i: 1 j: 7
// i: 1 j: 8
// i: 1 j: 9
// i: 2 j: 1
// i: 2 j: 2
// i: 2 j: 3
// i: 2 j: 4
// i: 2 j: 5
// i: 2 j: 6
// i: 2 j: 7
// i: 2 j: 8
// i: 2 j: 9
// i: 3 j: 1
// i: 3 j: 2
// i: 3 j: 3
// i: 3 j: 4
// i: 3 j: 5
// i: 3 j: 6
// i: 3 j: 7
// i: 3 j: 8
// i: 3 j: 9
// i: 4 j: 1
// i: 4 j: 2
// i: 4 j: 3
// i: 4 j: 4
// i: 4 j: 5
// i: 4 j: 6
// i: 4 j: 7
// i: 4 j: 8
// i: 4 j: 9
// i: 5 j: 1
// i: 5 j: 2
// i: 5 j: 3
// i: 5 j: 4
// i: 5 j: 5
// i: 5 j: 6
// i: 5 j: 7
// i: 5 j: 8
// i: 5 j: 9
// i: 6 j: 1
// i: 6 j: 2
// i: 6 j: 3
// i: 6 j: 4
// i: 6 j: 5
// i: 6 j: 6
// i: 6 j: 7
// i: 6 j: 8
// i: 6 j: 9
// i: 7 j: 1
// i: 7 j: 2
// i: 7 j: 3
// i: 7 j: 4
// i: 7 j: 5
// i: 7 j: 6
// i: 7 j: 7
// i: 7 j: 8
// i: 7 j: 9
// i: 8 j: 1
// i: 8 j: 2
// i: 8 j: 3
// i: 8 j: 4
// i: 8 j: 5
// i: 8 j: 6
// i: 8 j: 7
// i: 8 j: 8
// i: 8 j: 9
// i: 9 j: 1
// i: 9 j: 2
// i: 9 j: 3
// i: 9 j: 4
// i: 9 j: 5
// i: 9 j: 6
// i: 9 j: 7
// i: 9 j: 8
// i: 9 j: 9 */

// let number;
// whileLoop: do {
//   for (number = 0; number < 20; number++) {
//     console.log(number); // 0 1 2 3 4
//   }
//   if (number >= 20) {
//     break whileLoop;
//   }
// } while (true);

// let number = 20;

// if (number < 30) {
//   if (number > 15) {
//     if (number === 20) {
//       console.log("True");
//     }
//   }
// } else {
//   console.log("False");
// }

// -----------------------------------------------

// error handling
// let maxNumber = 10;
// if (maxNumber < 20) {
//   throw "Max number is smaller than...";
// } // Error: "Max number is smaller than..."

// function getMaxLifeValue() {
//   const enteredValue = prompt("Maximum life for you and the monster.", "100");
//   const parsedValue = +enteredValue;

//   // check for invalid entered number
//   if (isNaN(parsedValue) || parsedValue <= 0) {
//     throw "Invalid user input, nnot a number!";
//   }
//   return parsedValue;
// }

// let maxLife;

// try {
//   maxLife = getMaxLifeValue();
// } catch (error) {
//   console.log(error);
//   maxLife = 100;
//   alert("You enterd something wrong, deafult value of 100 was used.");
// }

// try {
//   throw "Oops";
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Cleanup");
// }
// // Oops
// // Cleanup

// -----------------------------------------------

// var vs let vs const
// var name = "Hamid";
// var name = "Hamed";
// var name = "Ali";
// console.log(name); // "Ali"

// let name = "Hamid";
// let name = "Hamed"; // error is here
// let name = "Ali";
// let name = "Reza";
// console.log(name); // SyntaxError: Identifier 'name' has already been declared

// {
//   var name1 = "Hamid";
//   let name2 = "Hamed";
// }
// console.log(name1, name2); // ReferenceError: name2 is not defined -- name1 = "Hamid"

// function hobby() {
//   if (true) {
//     var myHobby = "Programming";
//   }
//   console.log(`My favorite hobby is ${myHobby}`);
// }

// hobby(); // "My favorite hobby is Programming"

// function hobby() {
//   if (true) {
//     let myHobby = "Programming";
//   }
//   console.log(`My favorite hobby is ${myHobby}`);
// }

// hobby(); // ReferenceError: myHobby is not defined

// function hobby() {
//   if (true) {
//     const myHobby = "Programming";
//   }
//   console.log(`My favorite hobby is ${myHobby}`);
// }

// hobby(); // ReferenceError: myHobby is not defined

// -----------------------------------------------

// shadowing
// let userName = "Hamid";
// function User(name) {
//   let userName = name;
//   console.log(name);
// }

// userName = "Hamed";
// User("Hamid"); // "Hamid"

// let name = "Hamid";
// function greet() {
//   let name = "Ali";
//   console.log(name);
// }

// name = "Reza";
// greet(); // "Ali"

// var name = "Hamid";
// var name = "Hamed";
// function greet() {
//   let name = "Ali";
//   console.log(name);
// }

// console.log(name); // "Hamed"

// greet(); // "Ali"

// -----------------------------------------------

// hoisting
// console.log(name);
// var name = "Hamid";

// console.log(name);
// let name = "Hamid"; // ReferenceError: Cannot access 'name' before initialization

// ----

// "use strict";
// console.log(undefined);
// var undefined = "Hamid";
// // TypeError: Cannot assign to read only property 'undefined' of object

// "use strict";
// name = "Hamid";

// console.log(name); // ReferenceError: name is not defined

// -----------------------------------------------

// primitive and reference
// let name = "Hamid";
// console.log(name);

// let name = "Hamid";
// let MyFirstName = name;
// console.log(MyFirstName); // "Hamid"

// MyFirstName = "Hamed";
// console.log(MyFirstName); // "Hamed"

// let array = ["Hamid"];
// console.log(array); // [ 'Hamid' ]

// let newArray = array;
// array.push("Ali");
// console.log(newArray); // [ 'Hamid', 'Ali' ]

// let human = { name: "hamid", age: 23 };
// console.log(human); // { name: 'hamid', age: 23 }

// let person = human;
// person.age = 24;
// console.log(human); // { name: 'hamid', age: 24 }

// let hobbies = ["Programming"];
// console.log(hobbies); // [ 'Progeamming' ]

// let moreHobbies = [...hobbies];
// hobbies.push("Video games");
// console.log(moreHobbies); // [ 'Progeamming' ]

// const person1 = { age: 23 };
// const person2 = { age: 23 };

// console.log(person1 === person2); // false

// const names = ["Hamid", "Hamid"];
// names.push("Ali");
// console.log(names); // [ 'Hamid', 'Hamid', 'Ali' ]

// names = ["Reza, Majid, Mehrdad, Morteza"];
// console.log(names); // TypeError: Assignment to constant variable

// -----------------------------------------------

// garbage collector
// let human = { name: "Hamid" }; // not use anymore
// human = null;
// console.log(human); // "null"

// function addListener() {
//   clickableBtn.addEventListener("click", function () {
//     const value = messageInput.value;
//     console.log(value || "Clicked me!");
//   });
// }

// addListenerBtn.addEventListener("click", addListener);

// function printMessage() {
//   const value = messageInput.value;
//   console.log(value || "Clicked me!");
// }

// function addListener() {
//   clickableBtn.addEventListener("click", printMessage);
// }

// addListenerBtn.addEventListener("click", addListener);

// -----------------------------------------------

// method
// let user = {
//   name: "Hamid",
//   age: 23,
// };

// user.sayHi = function () {
//   alert("Hello!");
// };

// user.sayHi(); // "Hello!"

// let user = {};

// // first, declare
// function sayHi() {
//   alert("Hello!");
// }

// // then add as a method
// user.sayHi = sayHi;

// user.sayHi(); // "Hello!"

// // these objects do the same
// user = {
//   sayHi: function () {
//     alert("Hello");
//   },
// };

// // method shorthand looks better, right?
// user = {
//   sayHi() {
//     // same as "sayHi: function()"
//     alert("Hello");
//   },
// };

// -----------------------------------------------

// fuction expressions
// const human = function sayHi() {
//   console.log("Hi");
// };

// // human(); // "Hi"

// console.log(human.name)

// const start = function () {
//   console.log("Start game!");
// };

// start(); // "Start game!"

// func1(); // "Hello!"
// function func1() {
//   console.log("Hello!");
// }

// func2(); // ReferenceError: Cannot access 'func2' before initialization
// const func2 = function func2() {
//   console.log("Hello!");
// };

// -----------------------------------------------

// arrow function
// const person = function () {
//   console.log("Hello!");
// };

// const person = () => {
//   console.log("Hello!");
// };

// const person = function (a) {
//   return a;
// };

// const person = (a) => {
//   return a;
// };

// const person = a =>  a;

// const example = function() { };
// const example = () => { };

// -----------------------------------------------

// default arguments in functions
// function person(name, age = 23) {
//   console.log(name);
// }

// person("Hamid"); // "Hamid"

// function person(name = "Hamid", age) {
//   console.log(`name is ${name}`, `age is ${age}`);
// }

// person(undefined, 23); // "name is Hamid age is 23"

// function person(name = "" ? "Ali" : "Reza", age) {
//   console.log(`${name} and ${age}`);
// }

// person(undefined, 23); // "Reza and 23"

// function person(name = "Hamid" === "Hamid" ? "Ali" : "Reza", age) {
//   console.log(`${name} and ${age}`);
// }

// person(undefined, 23); // "Ali and 23"

// -----------------------------------------------

// rest operator
// const add = (numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// };

// console.log(add([1, 5, 10, -3, 6, 4])); // 23

// const add = (...numbers) => {
//   console.log(numbers);
// };

// add(1 + 5 + 10 - 3 + 6 + 4); // [ 23 ]

// const add = (...numbers,a,b) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// };

// console.log(add(1, 5, 10, -3, 6, 4)); // SyntaxError: Rest parameter must be last formal parameter

// const add = (a, b, ...numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// };

// console.log(add(1, 5, 10, -3, 6, 4)); // 17

// const coronaVirus = (a, b, ...people) => {
//   const validate = (number) => {
//     return isNaN(number) ? 0 : number;
//   };
//   let sum = 0;
//   for (const num of people) {
//     sum += validate(num);
//   }
//   return sum;
// };

// console.log(coronaVirus(12000, 5000, 1000, "Stop", 300, 6000, 400)); // 7700

// -----------------------------------------------

// nested function

// const add = (a, b, ...numbers) => {
//   const validate = (number) => {
//     return isNaN(number) ? 0 : number;
//   };
//   let sum = 0;
//   for (const num of numbers) {
//     sum += validate(num);
//   }
//   return sum;
// };

// console.log(add(1, 5, 10, "Hamid", -3, 6, 4)); // 17

// -----------------------------------------------

// callback function

// const add = (resultHandler, ...numbers) => {
//   const validate = (number) => {
//     return isNaN(number) ? 0 : number;
//   };
//   let sum = 0;
//   for (const num of numbers) {
//     sum += validate(num);
//   }
//   resultHandler(sum);
// };

// const showResult = (result) => {
//   alert(`The result after adding all numbers is: ${result}`);
// };

// add(showResult, 1, 5, 10, "Hamid", -3, 6, 4); // 23

// const add = (resultHandler, ...numbers) => {
//   const validate = (number) => {
//     return isNaN(number) ? 0 : number;
//   };
//   let sum = 0;
//   for (const num of numbers) {
//     sum += validate(num);
//   }
//   resultHandler(sum);
// };

// const showResult = (result) => {
//   alert(`The result after adding all numbers is: ${result}`);
// };

// add(showResult, 1, 5, 10, "Hamid", -3, 6, 4); // 23

// -----------------------------------------------

// bind
// const combine = (resultHandler, operator, ...numbers) => {
//   const validate = (number) => {
//     return isNaN(number) ? 0 : number;
//   };
//   let sum = 0;
//   for (const num of numbers) {
//     if (operator === "ADD") {
//       sum += validate(num);
//     } else {
//       sum -= validate(num);
//     }
//   }
//   resultHandler(sum);
// };

// const showResult = (messageText, result) => {
//   alert(`${messageText} ${result}`);
// };

// combine(showResult.bind(this, "The result after adding all numbers is: "), "ADD", 1, 5, 10, "Hamid", -3, 6, 4); // 23

// combine(showResult.bind(this, "The result after adding all numbers is: "), "SUBTRACT", 1, 5, 10, "Hamid", -3, 6, 4); // -23

// -----------------------------------------------

// complete bind
// let person = {
//   name: "Hamid Alavi",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(person.getName, 1000); // undefined
// // or
// setTimeout(function () {
//   person.getName();
// }, 1000);
// // or
// let f = person.getName.bind(person);
// setTimeout(f, 1000);

// ---

// const runner = {
//   name: "Runner",
//   run: function (speed) {
//     console.log(`${this.name} runs at ${speed} mph`);
//   },
// };

// const flyer = {
//   name: "Flyer",
//   fly: function (speed) {
//     console.log(`${this.name} flies at ${speed} mph`);
//   },
// };

// let run = runner.run.bind(flyer, 20);
// run(); // "Flyer runs at 20 mph"

// -----------------------------------------------

// DOM
// document.querySelector();
// document.querySelectorAll();
// document.getElementById();
// document.getElementsByName();
// document.getElementByClassName();
// document.getElementByTagName();
// document.createElement("<tag>");
// document.createAttribute();

// element.addEventListener("event", () => {});

// element.classList.toggle();

// element.textContent;
// element.textContent = "Some thing";
// element.innerHTML;
// element.innerHTML = "<tag>something</tag>";

// element.insertAdjacentHTML("beforebegin", HTML);
// element.insertAdjacentHTML("afterbegin", HTML);
// element.insertAdjacentHTML("beforeend", HTML);
// element.insertAdjacentHTML("afterend", HTML);

// element.insertAdjacentElement("beforebegin", element);
// element.insertAdjacentElement("afterbegin", element);
// element.insertAdjacentElement("beforeend", element);
// element.insertAdjacentElement("afterend", element);

// element.appendChild();
// element.append();
// element.prepend();
// element.before(); // ul.lastElementChild.before(newLi)
// element.after();
// element.insertBefore();
// element.remove();
// element.removeChild();
// element.replaceChild();
// element.replaceWith();

// element.parentNode;
// element.parentElement;
// element.closest;
// element.closest();

// element.nextSibling;
// element.previousSibling;
// element.nextElementSibling;
// element.previousElementSibling;

// element.childNode;
// element.children;
// element.children[];
// element.firstChild;
// element.firstElementChild;
// element.lastChild;
// element.lastElementChid;

// element.cloneNode();
// element.cloneNode(false);
// element.cloneNode(true);

// -----------------------------------------------

// array - basics
// const array = [15, 8];
// console.log(array); // [ 15, 8 ]

// const array2 = new Array(15, 8);
// console.log(array2); // [ 15, 8 ]

// const array3 = new Array(5);
// console.log(array3); // [ <5 empty items> ]

// const array4 = Array.of(5);
// console.log(array4); // [ 5 ]

// const array5 = Array.of(15, 8);
// console.log(array5); // [ 15, 8 ]

// const array6 = Array.from(15, 8);
// console.log(array6); // TypeError

// const array7 = Array.from([15, 8]);
// console.log(array7); // [ 15, 8 ]

// const array8 = Array.from("Hi");
// console.log(array8); // [ 'H', 'i' ]

// const nestedArrays = [
//   [15, 8],
//   [22, 26],
// ];

// for (const data of nestedArrays) {
//   for (const dataPoint of data) {
//     console.log(dataPoint); // 15 8 22 26
//   }
// }

// const nestedArrays = [[15, 8], [22, 26], 5];

// for (const data of nestedArrays) {
//   for (const dataPoint of data) {
//     console.log(dataPoint); // TypeError: data is not iterable
//   }
// }

// const zb = ["Hello", "I'm", 23, "Years", "Old"];
// console.log(zb[0]); // "Hello"
// console.log(zb[2]); // 23

// -----------------------------------------------

// array - insert and remove
// const array = ["Hamid", "Hamed"];
// array.push("Ali");
// console.log(array); // [ 'Hamid', 'Hamed', 'Ali' ] -- (3)

// const array = ["Hamid", "Hamed"];
// array.unshift("Ali");
// console.log(array); // [ 'Ali', 'Hamid', 'Hamed' ] -- (3)

// const array = ["Hamid", "Hamed"];
// array.unshift("Ali");
// array.pop();
// console.log(array); // [ 'Ali', 'Hamid' ] -- (2)

// const array = ["Hamid", "Hamed"];
// array.unshift("Ali");
// array.pop();
// array.shift();
// console.log(array); // [ 'Hamid' ]

// -----------------------------------------------

// array - splice()
// const array = ["Hamid", "Hamed"];
// array.splice(0, 0, "Ali");
// console.log(array); // [ 'Ali', 'Hamid', 'Hamed' ]

// const array = ["Hamid", "Hamed"];
// array.splice(1, 0, "Ali");
// console.log(array); // [ 'Hamid', 'Ali', 'Hamed' ]

// const array = ["Hamid", "Hamed"];
// array.splice(1, 1, "Ali");
// console.log(array); // [ 'Hamid', 'Ali' ]

// const array = ["Hamid", "Hamed", "Ali"];
// console.log(array.splice(2)); // [ 'Ali' ]
// console.log(array.splice(1)); // [ 'Hamed' ]
// console.log(array.splice(0)); // [ 'Hamid' ]

// const array = ["Hamid", "Hamed", "Ali"];
// array.splice(0, 2, "Reza", "Mehrdad", "Majid", "Morteza");
// console.log(array); // [ 'Reza', 'Mehrdad', 'Majid', 'Morteza', 'Ali' ]

// const array = ["Hamid", "Hamed", "Ali"];
// array.splice(0, 1);
// console.log(array); // [ 'Reza', 'Mehrdad', 'Majid', 'Morteza', 'Ali' ]

// const array = ["Majid", "Hamid", "Hamed", "Ali"];
// array.splice(0); // []
// console.log(array);

// const array = ["Hamid", "Hamed"];
// array.splice(0, 1, "Ali");
// console.log(array); // [ 'Ali', 'Hamed' ]

// const array = ["Hamid", "Hamed", "Reza"];
// array.splice(-1, 0, "Ali");
// console.log(array); // [ 'Hamid', 'Hamed', 'Ali', 'Reza' ]

// const array = ["hamid", "hamed", "Ali", "Reza"];
// console.log(array[-1]); // undefined

// -----------------------------------------------

// array - slice()
// const array = [1, 2, 34, -56, 4, 77];
// const array2 = array;

// console.log(array2); // [ 1, 2, 34, -56, 4, 77 ]

// const array = [1, 2, 34, -56, 4, 77];
// const array2 = array;

// array.push(100);

// console.log(array2); // [ 1,  2,  34, -56, 4, 77, 100 ]

// const array = [1, 2, 34, -56, 4, 77];
// const array2 = array.slice();

// array.push(100);

// console.log(array2); // [ 1, 2, 34, -56, 4, 77 ]

// const array = [1, 2, 34, -56, 4, 77];
// const array2 = array.slice(0, 3);

// console.log(array2); // [ 1, 2, 34 ]

// const array = [1, 2, 34, -56, 4, 77];
// const array2 = array.slice(-3, -1);

// console.log(array2); // [ -56, 4 ]

// const array = [1, 2, 34, -56, 4, 77];
// const array2 = array.slice(2);

// console.log(array2); // [ 34, -56, 4, 77 ]

// -----------------------------------------------

// array - concat()
// const array = [1, 2, 34, -56, 4, 77];
// const array2 = array.concat(1000);

// console.log(array2); // [ 1, 2, 34, -56, 4, 77, 1000 ]

// const array = [1, 2, 3];
// const array2 = array.concat([4, 5, 6]);

// console.log(array2); // [ 1, 2, 3, 4, 5, 6 ]

// const array = [1, 2, 3];
// const array2 = array.push([4, 5, 6]);

// console.log(array); // [ 1, 2, 3, [ 4, 5, 6 ] ]

// const array = [1, 2, 3];
// array.concat([4, 5, 6]);

// console.log(array); // [ 1, 2, 3 ]

// const array = [1, 2, 3];
// const newArray = array.concat([4, 5, 6]);

// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]

// -----------------------------------------------

// array - indexOf() and lastIndexOf()
// const array = [10, 22, 23, 56, 43, 42, 78];
// console.log(array.indexOf(56, 2)); // 3

// const array = [10, 22, 23, 56, 43, 42, 56, 78];
// console.log(array.indexOf(56, 2)); // 3

// const array = [10, 22, 23, 56, 43, 42, 56, 78];
// console.log(array.indexOf(56)); // 3
// console.log(array.lastIndexOf(56)); // 6

// const array = [{ name: "Hamid" }, { name: "Hamed" }];
// console.log(array.indexOf({ name: "Hamed" })); // -1

// -----------------------------------------------

// array - find() and findIndex() and includes()
// const array = [{ name: "Hamid" }, { name: "Hamed" }];

// const hamed = array.find((person, index, entireArray) => {
//   return (person.name === "Hamed");
// });

// console.log(hamed); // { name: 'Hamed' }

// const array = [{ name: "Hamid" }, { name: "Hamed" }];

// const hamed = array.find((person, index, entireArray) => {
//   return (person.name === "Hamed");
// });

// hamed.name = "Ali";

// console.log(hamed); // { name: 'Ali' }

// const array = [{ name: "Hamid" }, { name: "Hamed" }];

// const hamed = array.findIndex((person, index, entireArray) => {
//   return person.name === "Hamed";
// });

// console.log(hamed); // 1

// const array = [10, 22, 23, 56, 43, 42, 78];
// console.log(array.includes(25)); // false
// console.log(array.includes(23)); // true

// -----------------------------------------------

// array - forEach()
// const prices = [0.99, 1.99, 4.99, 9.99, 49.99, 99.99];
// const tax = 0.09;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// console.log(taxAdjustedPrices); // [ 1.07, 2.16, 5.43, 10.88, 54.48, 108.98 ]

// const prices = [0.99, 1.99, 4.99, 9.99, 49.99, 99.99];
// const tax = 0.09;
// const taxAdjustedPrices = [];

// prices.forEach((price, idx, array) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);
// /*
// [
//   { index: 0, taxAdjPrice: 1.0791000000000002 },
//   { index: 1, taxAdjPrice: 2.1691000000000003 },
//   { index: 2, taxAdjPrice: 5.439100000000001 },
//   { index: 3, taxAdjPrice: 10.889100000000001 },
//   { index: 4, taxAdjPrice: 54.48910000000001 },
//   { index: 5, taxAdjPrice: 108.98910000000001 }
// ]
// */

// -----------------------------------------------

// array - map()
// const prices = [0.99, 1.99, 4.99, 9.99, 49.99, 99.99];
// const tax = 0.09;
// const taxAdjustedPrices = prices.map((price, idx, array) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });
// console.log(prices, taxAdjustedPrices);
// /*
// [ 0.99, 1.99, 4.99, 9.99, 49.99, 99.99 ]

// [
//   { index: 0, taxAdjPrice: 1.0791000000000002 },
//   { index: 1, taxAdjPrice: 2.1691000000000003 },
//   { index: 2, taxAdjPrice: 5.439100000000001 },
//   { index: 3, taxAdjPrice: 10.889100000000001 },
//   { index: 4, taxAdjPrice: 54.48910000000001 },
//   { index: 5, taxAdjPrice: 108.98910000000001 }
// ]
// */

// const prices = [140, 1000, 4500, 3900, 7800, 10000];
// const transformedPrice = prices.map((value) => value * 2);
// console.log(transformedPrice); // [ 280, 2000, 9000, 7800, 15600, 20000 ]

// const prices = [140, 1000, 4500, 3900, 7800, 10000];
// const transformedPrice = prices.map((value, index) =>  index);
// console.log(transformedPrice); // [ 0, 1, 2, 3, 4, 5 ]

// const prices = [140, 1000, 4500, 3900, 7800, 10000];
// const transformedPrice = prices.map((value, index, array) =>  array);
// console.log(transformedPrice);
// /*
// [
//   [ 140, 1000, 4500, 3900, 7800, 10000 ],
//   [ 140, 1000, 4500, 3900, 7800, 10000 ],
//   [ 140, 1000, 4500, 3900, 7800, 10000 ],
//   [ 140, 1000, 4500, 3900, 7800, 10000 ],
//   [ 140, 1000, 4500, 3900, 7800, 10000 ],
//   [ 140, 1000, 4500, 3900, 7800, 10000 ]
// ]
// */

// -----------------------------------------------

// array - sort() and reverse()
// const prices = [140, 1000, 4500, 3900, 7800, 10000];
// prices.sort();
// console.log(prices); // [ 1000, 10000, 140, 3900, 4500, 7800 ]

// const prices = [140, 1000, 4500, 3900, 7800, 10000];
// prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });

// console.log(prices); // [ 140, 1000, 3900, 4500, 7800, 10000 ]

// const prices = [140, 1000, 4500, 3900, 7800, 10000];
// prices.sort((a, b) => a - b);

// console.log(prices); // [ 140, 1000, 3900, 4500, 7800, 10000 ]

// const prices = [140, 1000, 4500, 3900, 7800, 10000];
// prices.sort((a, b) => a - b);

// console.log(prices.reverse()); // [ 10000, 7800, 4500, 3900, 1000, 140 ]

// const prices = [140, 1000, 4500, 3900, 7800, 10000];
// prices.sort();
// console.log(prices); // [ 1000, 10000, 140, 3900, 4500, 7800 ]

// const prices = [140, 1000, 4500, 3900, 7800, 10000];
// prices.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });

// console.log(prices); // [ 10000, 7800, 4500, 3900, 1000, 140 ]

// -----------------------------------------------

// array - filter()
// const prices = [140, 1000, 4500, 3900, 7800, 10000];
// const filteredArray = prices.filter((price, index, array) => {
//   return price > 4000;
// });

// console.log(filteredArray); // [ 4500, 7800, 10000 ]

// const prices = [140, 1000, 4500, 3900, 7800, 10000];
// const filteredArray = prices.filter(price => price > 4000);

// console.log(filteredArray); // [ 4500, 7800, 10000 ]

// -----------------------------------------------

// array - reduce()
// const array = [1, 2, 3, 4];
// let sum = 0;

// const prices = array.forEach((value) => (sum += value));
// console.log(sum); // 10

// const array = [1, 2, 3, 4];
// const sum = array.reduce((prevValue, currValue, index, array) => {
//   return prevValue + currValue;
// }, 20);
// console.log(sum); // 10

// const array = [1, 2, 3, 4];
// const sum = array.reduce((perv, curr) => perv + curr);
// console.log(sum); // 10

// const array = [1, 2, 3, 4];
// const sum = array.reduce((perv, curr) => perv + curr, 15);
// console.log(sum); // 25

// -----------------------------------------------

// array - important
// const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
// const transformedArray = originalArray.map((obj) => obj.price); // produces [10.99, 5.99, 29.99]
// const sum = transformedArray.reduce((sumVal, curVal) => sumVal + curVal, 0);

// console.log(transformedArray); // [ 10.99, 5.99, 29.99 ]
// console.log(sum); // 46.97

// const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
// const sum = originalArray.reduce((sumVal, curVal) => sumVal + curVal.price, 0);

// console.log(sum); // 46.97

// const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
// const sum = originalArray
//   .map((obj) => obj.price)
//   .reduce((sumVal, curVal) => sumVal + curVal, 0);

// console.log(sum); // 46.97

// -----------------------------------------------

// array - split() and join()
// const string = "Hello;my;name;is;hamid;alavi";
// const transformedString = string.split(";");
// console.log(transformedString); // [ 'Hello', 'my', 'name', 'is', 'hamid', 'alavi' ]

// const string = "Hello;my;name;is;hamid;alavi";
// const transformedString = string.split(";", 2);
// console.log(transformedString); // [ 'Hello', 'my' ]

// const bio = ["Hamid", "Alavi", "is", "a programmer"];
// const joinedValue = bio.join(" ");
// console.log(joinedValue); // "Hamid Alavi is a programmer"

// const bio = ["Hamid", "Alavi", "is", 23, "years", "old"];
// const joinedValue = bio.join(" ");
// console.log(joinedValue); // "Hamid Alavi is 23 years old"

// const bio = ["Hamid", "Alavi", "is", 23, "years", "old"];
// const joinedValue = bio.join(" -- ");
// console.log(joinedValue); // "Hamid -- Alavi -- is -- 23 -- years -- old"

// const bio = ["Hamid", "Alavi", "is", 23, "years", "old"];
// const joinedValue = bio.join("#*#*#");
// console.log(joinedValue); // "Hamid#*#*#Alavi#*#*#is#*#*#23#*#*#years#*#*#old"

// -----------------------------------------------

// array - ... spread operator
// const sum = (x, y, z) => x + y + z;

// const numbers = [1, 2, 3];

// console.log(sum(...numbers)); // 6

// const array = [1, 2, 3];
// const elements = [...array];
// console.log(elements); // [ 1, 2, 3 ]

// const array = [1, 2, 3];
// const elements = [array];
// console.log(elements); // [ [ 1, 2, 3 ] ]

// const array = ["Hamid", "Alavi"];
// const copiedArray = [...array];

// array.push(" and I'm 23 years old");

// console.log(array); // [ 'Hamid', 'Alavi', " and I'm 23 years old" ]
// console.log(copiedArray); // [ 'Hamid', 'Alavi' ]

// const prices = [140, 1000, 4500, 3900, 7800, 10000];
// console.log(Math.min(prices)); //NaN
// console.log(Math.min(...prices)); // 140

// const persons = [
//   { name: "Hamid", age: 23 },
//   { name: "Hamed", age: 23 },
// ];

// const copiedPersons = [...persons];

// persons.push({ name: "Ali", age: 22 });

// console.log(persons); // [ { name: 'Hamid', age: 23 }, { name: 'Hamed', age: 23 }, { name: 'Ali', age: 22 } ]
// console.log(copiedPersons); // [ { name: 'Hamid', age: 23 }, { name: 'Hamed', age: 23 } ]

// const persons = [
//   { name: "Hamid", age: 23 },
//   { name: "Hamed", age: 23 },
// ];

// const copiedPersons = [...persons];

// persons.push({ name: "Ali", age: 22 });
// persons[0].age = 24;

// console.log(persons); // [ { name: 'Hamid', age: 24 }, { name: 'Hamed', age: 23 }, { name: 'Ali', age: 22 } ]
// console.log(copiedPersons); // [ { name: 'Hamid', age: 24 }, { name: 'Hamed', age: 23 } ]

// -----------------------------------------------

// array - array destructring
// const nameDate = ["Hamid", "Alavi"];
// const firstName = nameDate[0];
// const lastName = nameDate[1];

// console.log(firstName, lastName); // "Hamid Alavi"

// const nameDate = ["Hamid", "Alavi"];
// const [firstName, lastName] = nameDate;

// console.log(firstName, lastName); // "Hamid Alavi"

// const nameDate = ["Hamid", "Alavi", 23, "Ali", 22, "Reza"];
// const [firstName, lastName, ...otherInformation] = nameDate;

// console.log(firstName, lastName, otherInformation); // Hamid Alavi [ 23, 'Ali', 22, 'Reza' ]

// -----------------------------------------------

// array - Sets and Maps
// const ids = new Set();
// console.log(ids); // Set(0) {}

// const ids = new Set([1, 2, 3]);
// console.log(ids[1]); // undefined

// const ids = new Set([1, 2, 3]);
// console.log(ids.has(2)); // true
// console.log(ids.has(4)); // false

// const ids = new Set([1, 2, 3]);
// ids.add(4);
// ids.add(4);
// ids.add(4);
// ids.add(4);
// console.log(ids); // Set(4) { 1, 2, 3, 4 }

// const ids = new Set([1, 2, 3]);
// console.log(ids.entries()); // [Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] }

// const ids = new Set(["Hello", "Wellcome", "Hamid Alavi"]);
// console.log(ids.entries());
// /*
// [Set Entries] {
//   [ 'Hello', 'Hello' ],
//   [ 'Wellcome', 'Wellcome' ],
//   [ 'Hamid Alavi', 'Hamid Alavi' ]
// }
// */

// const ids = new Set([1, 2, 3]);
// console.log(ids.values()); // [Set Iterator] { 1, 2, 3 }

// const ids = new Set(["Hello", "Wellcome", "Hamid Alavi"]);
// ids.delete("Wellcome");
// console.log(ids); // Set(2) { 'Hello', 'Hamid Alavi' }

// const map1 = new Map([[1 , 2], [2 ,3 ] ,[4, 5]]);
// const map2 = new Map([["firstName", "Hamid"], ["lastName", "Alavi"]]);
// const map3 = new Map([["positive numbers", [1, 2, 3, 4]], ["decimal numbers", [1.1, 1.2, 1.3, 1.4]], ["negative numbers" , [-1, -2, -3, -4]]]);
// const map4 = new Map([[["firstName", "lastName"], ["Hamid", "Alavi"]], [["friend 1", "friend 2"], ["Ali", "Reza"]]]);

// console.log(map1); // Map(3) { 1 => 2, 2 => 3, 4 => 5 }
// console.log(map2); // Map(2) { 'firstName' => 'Hamid', 'lastName' => 'Alavi' }
// console.log(map3);
// /*
// Map(3) {
//   'positive numbers' => [ 1, 2, 3, 4 ],
//   'decimal numbers' => [ 1.1, 1.2, 1.3, 1.4 ],
//   'negative numbers' => [ -1, -2, -3, -4 ]
// }
// */
// console.log(map4);
// /*
// Map(2) {
//   [ 'firstName', 'lastName' ] => [ 'Hamid', 'Alavi' ],
//   [ 'friend 1', 'friend 2' ] => [ 'Ali', 'Reza' ]
// }
// */

// const person = { name: "hamid", age: 23 };
// const personData = new Map([[person, [{ date: "firstName", price: 100 }]]]);

// console.log(personData); // Map(1) { { name: 'hamid', age: 23 } => [ { date: 'firstName', price: 100 } ] }
// console.log(personData.get(person)); // [ { date: 'firstName', price: 100 } ]

// const person = { name: "hamid", age: 23 };
// const person2 = { name: "Ali", age: 22 };
// const personData = new Map([[person, [{ date: "firstName", price: 100 }]]]);

// personData.set(person2, [{ date: "two weeks ago", price: 120 }]);

// console.log(personData);
// /*
// Map(2) {
//   { name: 'hamid', age: 23 } => [ { date: 'firstName', price: 100 } ],
//   { name: 'Ali', age: 22 } => [ { date: 'two weeks ago', price: 120 } ]
// }
// */
// console.log(personData.get(person)); // [ { date: 'firstName', price: 100 } ]

// const person = { name: "hamid", age: 23 };
// const person2 = { name: "Ali", age: 22 };
// const personData = new Map([[person, [{ date: "firstName", price: 100 }]]]);

// personData.set(person2, [{ date: "two weeks ago", price: 120 }]);

// console.log(personData);
// /*
// Map(2) {
//   { name: 'hamid', age: 23 } => [ { date: 'firstName', price: 100 } ],
//   { name: 'Ali', age: 22 } => [ { date: 'two weeks ago', price: 120 } ]
// }
// */
// console.log(personData.get(person)); // [ { date: 'firstName', price: 100 } ]

// for (const entry of personData.entries()) {
//   console.log(entry);
// }
// /*
// [ { name: 'hamid', age: 23 }, [ { date: 'firstName', price: 100 } ] ]
// [ { name: 'Ali', age: 22 }, [ { date: 'two weeks ago', price: 120 } ] ]
// */

// const person = { name: "hamid", age: 23 };
// const person2 = { name: "Ali", age: 22 };
// const personData = new Map([[person, [{ date: "firstName", price: 100 }]]]);

// personData.set(person2, [{ date: "two weeks ago", price: 120 }]);

// console.log(personData);
// /*
// Map(2) {
//   { name: 'hamid', age: 23 } => [ { date: 'firstName', price: 100 } ],
//   { name: 'Ali', age: 22 } => [ { date: 'two weeks ago', price: 120 } ]
// }
// */
// console.log(personData.get(person)); // [ { date: 'firstName', price: 100 } ]

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }
// /*
// [ { name: 'hamid', age: 23 }, [ { date: 'firstName', price: 100 } ] ]
// [ { name: 'Ali', age: 22 }, [ { date: 'two weeks ago', price: 120 } ] ]
// */

// const person = { name: "hamid", age: 23 };
// const person2 = { name: "Ali", age: 22 };
// const personData = new Map([[person, [{ date: "firstName", price: 100 }]]]);

// personData.set(person2, [{ date: "two weeks ago", price: 120 }]);

// console.log(personData);
// /*
// Map(2) {
//   { name: 'hamid', age: 23 } => [ { date: 'firstName', price: 100 } ],
//   { name: 'Ali', age: 22 } => [ { date: 'two weeks ago', price: 120 } ]
// }
// */
// console.log(personData.get(person)); // [ { date: 'firstName', price: 100 } ]

// for (const key of personData.keys()) {
//   console.log(key);
// }
// /*
// { name: 'hamid', age: 23 }
// { name: 'Ali', age: 22 }
// */

// const person = { name: "hamid", age: 23 };
// const person2 = { name: "Ali", age: 22 };
// const personData = new Map([[person, [{ date: "firstName", price: 100 }]]]);

// personData.set(person2, [{ date: "two weeks ago", price: 120 }]);

// console.log(personData);
// /*
// Map(2) {
//   { name: 'hamid', age: 23 } => [ { date: 'firstName', price: 100 } ],
//   { name: 'Ali', age: 22 } => [ { date: 'two weeks ago', price: 120 } ]
// }
// */
// console.log(personData.get(person)); // [ { date: 'firstName', price: 100 } ]

// for (const value of personData.values()) {
//   console.log(value);
// }
// /*
// [ { date: 'firstName', price: 100 } ]
// [ { date: 'two weeks ago', price: 120 } ]
// */

// const person = { name: "hamid", age: 23 };
// const person2 = { name: "Ali", age: 22 };
// const personData = new Map([[person, [{ date: "firstName", price: 100 }]]]);

// personData.set(person2, [{ date: "two weeks ago", price: 120 }]);

// console.log(personData);
// /*
// Map(2) {
//   { name: 'hamid', age: 23 } => [ { date: 'firstName', price: 100 } ],
//   { name: 'Ali', age: 22 } => [ { date: 'two weeks ago', price: 120 } ]
// }
// */
// console.log(personData.get(person)); // [ { date: 'firstName', price: 100 } ]

// console.log(personData.size); // 2

// -----------------------------------------------

// array - WeakSets and WeakMaps

// let person = { name: "Hamid" };
// const persons = new WeakSet();

// persons.add(person);

// person = null;

// console.log(persons);
/*
WeakSet {{…}}
[[Entries]]
No properties
__proto__: WeakSet
*/

// let person = { name: "Hamid" };
// const persons = new Set();

// persons.add(person);

// person = null;

// console.log(persons);
// /*
// Set(1) {{…}}
// [[Entries]]
// 0:
// value: {name: "Hamid"}
// size: (...)
// __proto__: Set
// */

// let person = { name: "Hamid" };
// const persons = new WeakMap();

// persons.set(person, "Extra Info");

// person = null;

// console.log(persons);
// /*
// WeakMap {{…} => "Extra Info"}
// [[Entries]]
// 0: {Object => "Extra Info"}
// key: {name: "Hamid"}
// value: "Extra Info"
// __proto__: WeakMap
// */

// -----------------------------------------------

// object
// const complexPerson = {
//   name: "Hamid",
//   hobbies: ["Programming", "Gaming"],
//   address: {
//     street: "Some Street",
//     stateId: 10,
//     country: "Iran",
//     phone: {
//       number: Number("+989216570293"),
//       isMobile: true,
//     },
//   },
// };

// const person = {
//   name: "Hamid",
//   age: 23,
//   hobbies: ["Programming", "Gaming"],
//   greet: function () {
//     alert("Hi there!");
//   },
// };

// console.log(person.name); // "Hamid"
// console.log(person.isAdmin); // undefined

// const person = {
//   name: "Hamid",
//   age: 23,
//   hobbies: ["Programming", "Gaming"],
//   greet: function () {
//     alert("Hi there!");
//   },
// };

// console.log(person.name); // "Hamid"

// person.isAdmin = true;
// console.log(person.isAdmin); // true

// -----------------------------------------------

// object - modify and delete properties
// const person = {
//   name: "Hamid",
//   age: 23,
//   hobbies: ["Programming", "Gaming"],
//   greet: function () {
//     alert("Hi there!");
//   },
// };

// console.log(person.name); // "Hamid"

// person.name = "Reza";
// console.log(person.name); // "Reza"

// const person = {
//   name: "Hamid",
//   age: 23,
//   hobbies: ["Programming", "Gaming"],
//   greet: function () {
//     alert("Hi there!");
//   },
// };

// delete person.name;
// console.log(person.name); // undefined

// -----------------------------------------------

// object - coerced to string
// const person = {
//   first-name: "Hamid",
//   age: 23,
//   hobbies: ["Programming", "Gaming"],
//   greet: function () {
//     alert("Hi there!");
//   },
// };
// // SyntaxError: Unexpected token '-'

// const person = {
//   "first-name": "Hamid",
//   age: 23,
//   hobbies: ["Programming", "Gaming"],
//   greet: function () {
//     alert("Hi there!");
//   },
// };

// console.log(person["first-name"]); // "Hamid"

// const movieList = document.getElementById("movie-list");
// movieList.style.backgroundColor = "red";
// movieList.style[backgroundColor] = "red";
// movieList.style['backgroundColor'] = "red";
// movieList.style["backgroundColor"] = "red";
// movieList.style["background-color"] = "red";

// -----------------------------------------------

// object - types and order
// const object = {
//   1: "Hamid",
//   6: "Reza",
//   3: "Ali",
// };

// console.log(object); // { '1': 'Hamid', '3': 'Ali', '6': 'Reza' }

// const object = {
//   -1: "Hamid", // SyntaxError: Unexpected token '-'
//   6: "Ali",
//   -3: "Reza", // SyntaxError: Unexpected token '-'
// };

// console.log(object); // Error

// const object = {
//   1.4: "Hamid",
//   6: "Reza",
//   3: "Ali",
// };

// console.log(object.1.4); // SyntaxError
// console.log(object.6); // SyntaxError

// const object = {
//   1.4: "Hamid",
//   6: "Reza",
//   3: "Ali",
// };

// console.log(object[1.4]); // "Hamid"
// console.log(object[6]); // "Reza"

// -----------------------------------------------

// object - dynamic
// const person = {
//   "first name": "Hamid",
//   age: 23,
//   height: 180,
// };

// keyName = "first name";

// console.log(person[keyName]); // "Hamid"
// console.log(person.keyName); // undefined

// const userChoiceKey = "level";

// const person = {
//   "first name": "Hamid",
//   [userChoiceKey]: "This value is `level`",
//   age: 23,
//   height: 180,
// };

// keyName = "first name";

// console.log(person[keyName]); // "Hamid"
// console.log(person[userChoiceKey]); // "This value is `level`"

// -----------------------------------------------

// object - shorthand property
// const title = document.getElementById("title").value;
// const extraName = document.getElementById("extra-name").value;
// const extraValue = document.getElementById("extra-value").value;

// // # normal
// const newMovie = {
//   title: title,
//   extraName: extraName,
//   extraValue: extraValue,
// };

// // # shorthand property
// const newMovie = {
//   title,
//   extraName,
//   extraValue,
// };

// [{…}]
// 0:
// id: 0.7939495269983203
// info:
// Level: "5"
// title: "JavaScript Course"
// __proto__: Object
// __proto__: Object
// length: 1
// __proto__: Array(0)

// const person = {
//   name: "Hamid",
//   age: 23,
//   sayHi: function () {
//     console.log("Hi There!");
//   },
// };

// person.sayHi(); // "Hi There!"

// -----------------------------------------------

// object - spread operator
// const person = { name: "Hamid", hobbies: ["Programming", "Gaming"] };
// const anotherPerson = person;

// person.age = 23;

// console.log(anotherPerson); // { name: 'Hamid', hobbies: [ 'Programming', 'Gaming' ], age: 23 }

// const person = { name: "Hamid", hobbies: ["Programming", "Gaming"] };
// const anotherPerson = { ...person };

// person.age = 23;

// console.log(anotherPerson); // { name: 'Hamid', hobbies: [ 'Programming', 'Gaming' ] }

// const person = { name: "Hamid", hobbies: ["Programming", "Gaming"] };
// const anotherPerson = { ...person };

// person.age = 23;
// person.hobbies.push("Reading");

// console.log(anotherPerson); // { name: 'Hamid', hobbies: [ 'Programming', 'Gaming', 'Reading' ] }

// const person = { name: "Hamid", hobbies: ["Programming", "Gaming"] };
// const anotherPerson = { ...person, hobbies: [...person.hobbies] };
// person.hobbies.push("Reading");

// console.log(person); // { name: 'Hamid', hobbies: [ 'Programming', 'Gaming', 'Reading' ] }
// console.log(anotherPerson); // { name: 'Hamid', hobbies: [ 'Programming', 'Gaming' ] }

// const person = { name: "Hamid" };
// const anotherPerson = Object.assign({}, person);

// person.age = 23;

// console.log(person); // { name: 'Hamid', age: 23 }
// console.log(anotherPerson); // { name: 'Hamid' }

// -----------------------------------------------

// object - object destructuring
// const user = {
//   id: 42,
//   is_verified: true,
// };

// const { id, is_verified } = user;

// console.log(id); // 42
// console.log(is_verified); // true

// const user = {
//   id: 42,
//   is_verified: true,
// };

// const { id: userId, is_verified: validation } = user;

// console.log(userId); // 42
// console.log(validation); // true

// const metadata = {
//   title: "Scratchpad",
//   translations: [
//     {
//       locale: "ir",
//       localization_tags: [],
//       last_edit: "2020-10-14T08:43:37",
//       url: "/ir/docs/Tools/Scratchpad",
//       title: "JavaScript",
//     },
//   ],
//   url: "/en-US/docs/Tools/Scratchpad",
// };

// let {
//   title: englishTitle, // rename
//   translations: [
//     {
//       title: localeTitle, // rename
//     },
//   ],
// } = metadata;

// console.log(englishTitle); // "Scratchpad"
// console.log(localeTitle); // "JavaScript"

// const numbers = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };
// const { a, b, ...others } = numbers;

// console.log(a, b); // 1 2
// console.log(others); // { c: 3, d: 4, e: 5, f: 6, g: 7 }

// -----------------------------------------------

// object - checking for property existence
// const person = { name: "hamid", age: 23 };

// if ("name" in person) {
//   console.log("Yeah"); // "Yeah"
// }

// if ("hobbies" in person) {
//   console.log("Yeah");
// } else {
//   console.log("Noo"); // "Noo"
// }

// -----------------------------------------------

// object - this
// const something = {
//   prop: 23,
//   func: function () {
//     return this.prop;
//   },
// };

// console.log(something.func()); // 23

// ---

// console.log(this === window); // true

// age = 23;
// console.log(window.age); // 23

// this.name = "Hamid";
// console.log(window.name); // "Hamid"
// console.log(name); // "Hamid"

// const members = {
//   teamName: "Persian Sight",
//   people: ["Hamid", "Hamed", "Ali"],
//   getTeamMember() {
//     this.people.forEach((p) => {
//       console.log(p + " - " + this.teamName);
//     });
//   },
// };

// members.getTeamMember();
// /*
// Hamid - Persian Sight
// Hamed - Persian Sight
// Ali - Persian Sight
// */

// const members = {
//   teamName: "Persian Sight",
//   people: ["Hamid", "Hamed", "Ali"],
//   getTeamMember() {
//     this.people.forEach(function (p) {
//       console.log(p + " - " + this.teamName);
//     });
//   },
// };

// members.getTeamMember();
// /*
// Hamid - undefined
// Hamed - undefined
// Ali - undefined
// */

// -----------------------------------------------

// object - call() and apply() methods
// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person1 = {
//   firstName: "Hamid",
//   lastName: "Alavi",
// };

// const person2 = {
//   firstName: "Hamed",
//   lastName: "Alavi",
// };

// console.log(person.fullName.call(person1)); // "Hamid Alavi"

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person1 = {
//   firstName: "Hamid",
//   lastName: "Alavi",
// };

// console.log(person.fullName.apply(person1)); // "Hamid Alavi"

// -----------------------------------------------

// object - getters and setters
// const person = {
//   info: {
//     set name(val) {
//       if (val.trim() === "") {
//         this._name = "DEFAULT";
//         return;
//       }
//       this._name = val;
//     },
//     get name() {
//       return this._name + " Alavi";
//     },
//     age: 23,
//   },
//   hobbies: ["programming", "Gaming"],
// };

// person.info.name = "";
// console.log(person.info.name); // DEFAULT

// person.info.name = "Hamid";
// console.log(person.info.name); // Hamid Alavi

// console.log(person); // { info: { name: [Getter/Setter], age: 23, _name: 'Hamid' }, hobbies: [ 'programming', 'Gaming' ] }

// -----------------------------------------------

// OOP
// const example1 = {
//   title: "DEAFAULT",
//   description: "NO DESCRIPTION",
// };

// class Example2 {
//   title = "DEAFAULT";
//   description = "NO DESCRIPTION";
// }

// class MyClass {
//   title = "DEAFAULT";
//   description = "NO DESCRIPTION";
// }

// console.log(MyClass); // [class MyClass]
// console.log(new MyClass()); // MyClass { title: 'DEAFAULT', description: 'NO DESCRIPTION' }
// console.log(MyClass()); // TypeError: Class constructor MyClass cannot be invoked without 'new'

// -----------------------------------------------

// OOP - constructors
// class Example {
//   title = "DEFAULT";
//   imageUrl;
//   price;
//   description;

//   constructor(title, url, price, desc) {
//     this.title = title;
//     this.imageUrl = url;
//     this.price = price;
//     this.description = desc;
//   }
// }

// const product = new Example(
//   "JavaScript",
//   "https://i.pinimg.com/originals/fc/c5/bd/fcc5bdf4590e2459f4b9aa606fe4ce43.jpg",
//   199.99,
//   "A good course"
// );

// console.log(product);
// /*
// Example {
//   title: 'JavaScript',
//   imageUrl: 'https://i.pinimg.com/originals/fc/c5/bd/fcc5bdf4590e2459f4b9aa606fe4ce43.jpg',
//   price: 199.99,
//   description: 'A good course'
// }
// */

// class Product {
//   category = "DEFAULT";
//   constructor(title) {
//     this.title = title;
//   }

//   printInfo() {
//     console.log(this.title, this.category);
//   }
// }

// class Product {
//   category = "DEFAULT";
//   title;
//   constructor(title) {
//     this.title = title;
//   }
// }

// console.log(new Product("Title")); // Product { category: 'DEFAULT', title: 'Title' }

// class Product {
//   category = "DEFAULT";
//   constructor(title) {
//     this.title = title;
//   }
// }

// console.log(new Product("Title")); // Product { category: 'DEFAULT', title: 'Title' }

// const object = {
//   name: "Hamid",
// };

// object.age = 23;

// console.log(object); // { name: 'Hamid', age: 23 }

// -----------------------------------------------

// OOP - static
// class App {
//   title;
//   description;

//   static init() {
//     console.log("Yeah");
//   }
// }

// App.init(); // "Yeah"

// -----------------------------------------------

// OOP - inheritance
// class Person {
//   height;
//   isFat;
//   age;
//   name;

//   constructor(name, age, height, isFat) {
//     this.height = height;
//     this.isFat = isFat;
//     this.age = age;
//     this.name = name;
//     console.log(name, age, height, isFat);
//   }
// }

// // new Person("Hamid", 23, 180, false); // "Hamid" 23 180 false

// class Girl extends Person {}

// new Girl("Sarah", 23, 180, false); // "Sarah" 23 180 false

// class Boy extends Girl {}

// new Boy("Hamid", 23, 180, false); // "Hamid" 23 180 false

// class Parent {
//   height;
//   isFat;
//   age;
//   name;

//   constructor(name, age, height, isFat) {
//     this.height = height;
//     this.isFat = isFat;
//     this.age = age;
//     this.name = name;
//     console.log(name, age, height, isFat);
//   }
// }

// class Child extends Parent {
//   constructor(a, b, c, d) {
//     super(a, b, c, d);
//   }
// }

// new Child("Hamid", 23, 180, false); // "Hamid" 23 180 false

// -----------------------------------------------

// OOP - private mode
// class ClassWithPrivateStaticMethod {
//   static #privateStaticMethod() {
//     return 23;
//   }

//   static publicStaticMethod() {
//     return this.#privateStaticMethod();
//   }
// }

// console.log(ClassWithPrivateStaticMethod.publicStaticMethod() === 23); // true

// class ClassWithPrivateMethod {
//   #privateMethod() {
//     return "hello world";
//   }

//   getPrivateMessage() {
//     return this.#privateMethod();
//   }
// }

// const instance = new ClassWithPrivateMethod();
// console.log(instance.#privateMethod()); // SyntaxError: Private field '#privateMethod' must be declared in an enclosing class
// console.log(instance.getPrivateMessage()); // "hello worl​d"

// -----------------------------------------------

// OOP - instanceof
// class Person {
//   name = "Hamid";
// }

// const p = new Person();

// console.log(p instanceof Person); // true
// console.log(typeof Person); // "function"
// console.log(typeof p); // "object"

// const btn = document.querySelector("button");

// console.log(btn instanceof HTMLButtonElement); // true
// console.log(btn instanceof HTMLElement); // true
// console.log(btn instanceof Person); // false

// const myObj = new Object();
// const myArray = new Array();

// console.log(myObj); // "{}"
// console.log(myArray); // "[]"
// console.log(typeof myObj); // "object"
// console.log(typeof myArray); // "object"

// -----------------------------------------------

// OOP - object descriptors
// const person = {
//   name: "Hamid",
//   greet() {
//     this.name;
//   },
// };

// console.log(Object.getOwnPropertyDescriptors(person));
// /*
// {name: {…}, greet: {…}}
//   greet:
//   configurable: true
//   enumerable: true
//   value: ƒ greet()
//   writable: true
//   __proto__: Object
// name:
//   configurable: true
//   enumerable: true
//   value: "Hamid"
//   writable: true
//   __proto__: Object
// __proto__: Object
// */

// const person = { name: "Hamid" };
// Object.defineProperty(person, "name", {
//   configurable: true,
//   enumerable: true,
//   value: "Hamid Alavi",
//   writable: false,
// });

// console.log(person.name); // "Hamid Alavi"
// person.name = "Ali Rahimi";
// console.log(person.name); // "Hamid Alavi"

// const person = { name: "Hamid" };
// Object.defineProperty(person, "name", {
//   configurable: false,
//   enumerable: true,
//   value: "Hamid Alavi",
//   writable: false,
// });

// delete person.name;
// console.log(person); // { name: 'Hamid Alavi' }

// const person = { name: "Hamid", age: 23, height: 180 };
// Object.defineProperty(person, "name", {
//   configurable: true,
//   enumerable: false,
//   value: "Hamid Alavi",
//   writable: false,
// });

// for (key in person) {
//   console.log(key); // "age" "height"
// }

// -----------------------------------------------

// constructor functions and prototypes - constructor functions vs classes
// class Person {
//   name = "Hamid";
//   constructor() {
//     this.age = 23;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// const person = new Person();
// person.greet(); // Hi, I am Hamid and I am 23 years old

// function Person() {
//   this.name = "Hamid";
//   this.age = 23;
//   this.greet = function () {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   };
// }

// const person = new Person();
// person.greet(); // Hi, I am Hamid and I am 23 years old

// function Person() {
//   this.name = "Hamid";
//   this.age = 23;
//   this.greet = function () {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   };
// }

// const person = Person();
// person.greet(); // TypeError: Cannot read property 'greet' of undefined

// function Person() {
//   this = {};
//   this.name = "Hamid";
//   this.age = 23;
//   this.greet = function () {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   };
//   return this;
// }

// -----------------------------------------------

// constructor functions and prototypes - prototypes
// class Person {
//   name;

//   greet() {
//     console.log("Yo guys and girls");
//   }
// }

// const person = new Person();
// person.greet(); // "Yo guys and girls"

// person.sayHello();

// class Person {
//   name = "Hamid";
//   age = 23;

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// const person = new Person();

// console.log(person.toString()); // "[object Object]"

// console.log(person);
// /*
// Person {name: "Hamid", age: 23}
//   age: 23
//   name: "Hamid"
//   __proto__: Object
// */

// class Person {
//   name = "Hamid";
//   age = 23;

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// const person = new Person();

// console.log(person.__proto__);
// /*
// {constructor: ƒ, greet: ƒ}
//   constructor: class Person
//   greet: ƒ greet()
//   __proto__: Object
// */
// console.log(person.__proto__ == Person.prototype); // true
// console.log(person.__proto__ === Person.prototype); // true

// function Person() {
//   this.name = "Hamid";
//   this.age = 23;
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// const person = new Person();

// console.log(person); // { name: 'Hamid', age: 23 } --
// /*
// Person {name: "Hamid", age: 23}
//   age: 23
//   name: "Hamid"
//   __proto__:
//     printAge: ƒ printAge()
//     __proto__: Object
// */
// person.printAge(); // 23
// console.log(person.__proto__); // { printAge: [Function: printAge] } --
// /*
// {printAge: ƒ}
// printAge: ƒ printAge()
// __proto__: Object
// */

// function User() {
//   // ... // some logic, doesn't matter => configures which properties etc. user objects will have
// }

// User.prototype = { age: 30 }; // sets prototype object for "to be created" user objects, NOT for User function object

// function User() {
//   this.name = "Hamid";
// }

// const userA = new User();
// console.log(userA.__proto__ === User.prototype); // true
// console.log(userA.__proto__ === User.__proto__); // false

// -----------------------------------------------

// constructor functions and prototypes - working with prototypes
// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "Hamid";
//   constructor() {
//     super();
//     this.age = 23;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// const person = new Person();

// person.printAge(); // 23
// console.log(person.__proto__);
// /*
// AgedPerson {constructor: ƒ, greet: ƒ}
//   constructor: class Person
//   greet: ƒ greet()
//   __proto__: Object
// */

// function Person() {
//   this.name = "Hamid";
//   this.age = 23;
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// const person = new Person();

// console.log(person.__proto__);
// /*
// {printAge: ƒ}
// printAge: ƒ printAge()
// __proto__: Object
// */

// function Person() {
//   this.name = "Hamid";
//   this.age = 23;
// }

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// const person = new Person();

// console.log(person.__proto__);
// /*
// {printAge: ƒ, constructor: ƒ}
//   printAge: ƒ ()
//   constructor: ƒ Person()
//   __proto__: Object
// */

// -----------------------------------------------

// constructor functions and prototypes - prototype chain
// function Person() {
//   this.name = "Hamid";
//   this.age = 23;
// }

// Person.describe = function () {
//   console.log("Hey there!");
// };

// const person = new Person();

// console.log(person);
// /*
// Person {name: "Hamid", age: 23}
//   age: 23
//   name: "Hamid"
//   __proto__: Object
// */

// console.log(person.describe());

// function Person() {
//   this.name = "Hamid";
//   this.age = 23;
// }

// Person.describe = function () {
//   console.log("Hey there!");
// };

// const person = new Person();

// console.log(Object.length); // 1
// console.log(person.length); // undefiend

// -----------------------------------------------

// constructor functions and prototypes - methods in classes and in constructors
// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "Hamid";
//   constructor() {
//     super();
//     this.age = 23;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// const person = new Person();

// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "Hamid";
//   constructor() {
//     super();
//     this.age = 23;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// const person = new Person();
// const person2 = new Person();

// console.log(person.__proto__ === person2.__proto__); // true

// ---

// function Person() {
//   this.name = "Hamid";
//   this.age = 23;
// }

// Person.prototype.greet = function () {
//   console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
// };

// const person = new Person();

// console.log(person);
// /*
// Person {name: "Hamid", age: 23}
//   age: 23
//   name: "Hamid"
//   __proto__:
//     greet: ƒ ()
//     constructor: ƒ Person()
//     __proto__: Object
// */

// class Person {
//   name = "Hamid";
//   constructor() {
//     this.age = 23;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// const person = new Person();

// console.log(person);
// /*
// Person {name: "Hamid", age: 23}
//   age: 23
//   name: "Hamid"
//   __proto__:
//     constructor: class Person
//     greet: ƒ greet()
//     __proto__: Object
// */

// function Person() {
//   this.name = "Hamid";
//   this.age = 23;
//   this.greet = function () {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   };
// }

// const person = new Person();

// class Person {
//   name = "Hamid";
//   constructor() {
//     this.age = 23;
//     this.greet = function () {
//       console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//     };
//   }
// }

// const person = new Person();

// class Person {
//   name = "Hamid";
//   constructor() {
//     this.age = 23;
//   }

//   greet = function () {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   };
// }

// const person = new Person();

// console.log(person);
// /*
// Person {name: "Hamid", age: 23, greet: ƒ}
//   age: 23
//   greet: ƒ ()
//   name: "Hamid"
//   __proto__: Object
// */

// class Person {
//   name = "Hamid";
//   constructor() {
//     this.age = 23;
//   }

//   greet = () => {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   };
// }

// const person = new Person();

// console.log(person);

// class Person {
//   name = "Hamid";
//   constructor() {
//     this.age = 23;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// class Person {
//   name = "Hamid";
//   constructor() {
//     this.age = 23;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// const p = new Person();

// const btn = document.getElementById("btn");
// btn.addEventListener("click", p.greet); // "Hi, I am  and I am undefined years old"

// class Person {
//   name = "Hamid";
//   constructor() {
//     this.age = 23;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// const p = new Person();

// const btn = document.getElementById("btn");
// btn.addEventListener("click", p.greet.bind(p)); // "Hi, I am Hamid and I am 23 years old"

// -----------------------------------------------

// constructor functions and prototypes - setting and getting prototypes
// const course = {
//   title: "JavaScript",
//   rating: 5,
// };

// console.log(Object.getPrototypeOf(course)); // like `course.__proto__`
// /*
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//   constructor: ƒ Object()
//   hasOwnProperty: ƒ hasOwnProperty()
//   isPrototypeOf: ƒ isPrototypeOf()
//   propertyIsEnumerable: ƒ propertyIsEnumerable()
//   toLocaleString: ƒ toLocaleString()
//   toString: ƒ toString()
//   valueOf: ƒ valueOf()
//   __defineGetter__: ƒ __defineGetter__()
//   __defineSetter__: ƒ __defineSetter__()
//   __lookupGetter__: ƒ __lookupGetter__()
//   __lookupSetter__: ƒ __lookupSetter__()
//   get __proto__: ƒ __proto__()
//   set __proto__: ƒ __proto__()
// */

// const course = {
//   title: "JavaScript",
//   rating: 5,
// };

// Object.setPrototypeOf(course, {
//   printRating() {
//     console.log(`${this.rating}/5`);
//   },
// });

// course.printRating(); // "5/5"

// const course = {
//   title: "JavaScript",
//   rating: 5,
// };

// Object.setPrototypeOf(course, {
//   ...Object.getPrototypeOf(course),
//   printRating() {
//     console.log(`${this.rating}/5`);
//   },
// });

// course.printRating(); // "5/5"

// -----------------------------------------------

// constructor functions and prototypes - create an object
// const obj = Object.create({
//   printProgress() {
//     console.log(this.progress);
//   },
// });

// console.log(obj);
// /*
// {}
//   __proto__:
//     printProgress: ƒ printProgress()
//     __proto__: Object
// */

// const obj = Object.create({
//   printProgress() {
//     console.log(this.progress);
//   },
// });

// obj.name = "Hamid";

// Object.defineProperty(obj, "progress", {
//   configurable: true,
//   enumerable: true,
//   value: 0.8,
//   writable: false,
// });

// console.log(obj.progress); // 0.8

// const obj = Object.create(
//   {
//     printProgress() {
//       console.log(this.progress);
//     },
//   },
//   {
//     name: {
//       configurable: true,
//       enumerable: true,
//       value: "Hamid",
//       writable: true,
//     },
//   }
// );

// Object.defineProperty(obj, "progress", {
//   configurable: true,
//   enumerable: true,
//   value: 0.8,
//   writable: false,
// });

// console.log(obj.progress); // 0.8
// console.log(obj.name); // "Hamid"

// -----------------------------------------------

// DOM - import node (template)
// const tooltipTemplate = document.getElementById("tooltip");
// const tooltipBody = document.importNode(tooltipTemplate.content, true);
// tooltipBody.lastElementChild.textContent = this.text;
// // tooltipBody.querySelector("p").textContent = this.text;
// tooltipElement.append(tooltipBody);

// -----------------------------------------------

// DOM - loading scripts dynamically
// const script = document.createElement("script");
// script.textContent = "alert('Hello there')";
// document.head.append(script);

// -----------------------------------------------

// DOM - timers
// const name = () => {
//   console.log("Hamid");
// };

// setTimeout(name, 3000); // after three seconds, "Hamid"

// setTimeout(() => {
//   console.log("Hamid");
// }, 3000); // after three seconds, "Hamid"

// setTimeout(function () {
//   console.log("Hamid");
// }, 3000); // after three seconds, "Hamid"

// const name = () => {
//   console.log("Hamid");
// };
// const time = 3000;

// setTimeout(name, time); // after three seconds, "Hamid"

// const name = () => {
//   console.log("Hamid");
// };

// setInterval(name, 3000); // every three seconds, "Hamid"

// setInterval(() => {
//   console.log("Hamid");
// }, 3000); // every three seconds, "Hamid"

// setInterval(function () {
//   console.log("Hamid");
// }, 3000); // every three seconds, "Hamid"

// const name = () => {
//   console.log("Hamid");
// };
// const time = 3000;

// setInterval(name, time); // every three seconds, "Hamid"

// const intervalId = setInterval(() => {
//   console.log("Hamid");
// }, 1000); // every three seconds, "Hamid"

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// const btn = document.getElementById("btn");

// const intervalId = setInterval(() => {
//   console.log("Hamid");
// }, 1000); // every three seconds, "Hamid"

// btn.addEventListener("click", () => {
//   clearInterval(intervalId);
// });

// -----------------------------------------------

// DOM - dates
// const date = new Date();
// const date2 = new Date("04/8/20");

// console.log(date - date2); // 14854160012

// console.log(date / 100 * 2 - 300); // 32022838900.24

// -----------------------------------------------

// DOM - errors
// new Error("Somthing went wrong!"); // Error: Somthing went wrong!

// throw "Somthing went wrong!"; // Uncaught Somthing went wrong!

// throw new Error("Somthing went wrong!"); // Uncaught Error: Somthing went wrong! at :1:7 (anonymous) @ VM109:1)

// const customError = new Error("Somthing went wrong!");
// customError.code = 404;

// console.dir(customError);
// /*
// Error: Somthing went wrong!
//     at <anonymous>:1:13
// code: 404
// message: "Somthing went wrong!"
// stack: "Error: Somthing went wrong!↵    at <anonymous>:1:13"
// __proto__: Object
// */

// -----------------------------------------------

// Event - add and remove event listener (click)
// const button = document.querySelector("button");

// button.onclick = function () {
//   alert("Hello!");
// };

// const button = document.querySelector("button");

// const clickButtonHandler = () => {
//   alert("Hello!");
// };

// button.onclick = clickButtonHandler;

// const button = document.querySelector("button");

// const clickButtonHandler = () => {
//   alert("Hello!");
// };

// const clickButtonHandler2 = () => {
//   console.log("Button was clicked!");
// };

// button.onclick = clickButtonHandler;
// button.onclick = clickButtonHandler2;

// const button = document.querySelector("button");

// const clickButtonHandler = () => {
//   console.log("Button was clicked!");
// };

// button.addEventListener("click", clickButtonHandler);

// const button = document.getElementById("button");

// const clickButtonHandler = () => {
//   console.log("Button was clicked!");
// };

// button.addEventListener("click", clickButtonHandler);

// const removeClickEvent = () => {
//   button.removeEventListener("click", clickButtonHandler);
//   console.log("Button event has removed!");
// };

// setTimeout(removeClickEvent, 3000);

// const button = document.getElementById("button");

// button.addEventListener("click", () => {
//   console.log("Cicked!");
// });

// setTimeout(() => {
//   button.removeEventListener("click", () => {
//     console.log("Cicked!");
//   });
// }, 3000); // not works

// const button = document.getElementById("button");

// const clickButtonHandler = () => {
//   console.log("Button was clicked!");
// };

// button.addEventListener("click", clickButtonHandler);

// setTimeout(() => {
//   button.removeEventListener("click", clickButtonHandler);
// }, 3000);

// const button = document.getElementById("button");

// const clickButtonHandler = () => {
//   console.log("Button was clicked!");
// };

// button.addEventListener("click", clickButtonHandler.bind(this));

// setTimeout(() => {
//   button.removeEventListener("click", clickButtonHandler.bind(this));
// }, 3000); // not workss

// const button = document.getElementById("button");

// const clickButtonHandler = () => {
//   console.log("Button was clicked!");
// };

// const boundFn = clickButtonHandler.bind(this);

// button.addEventListener("click", boundFn);

// setTimeout(() => {
//   button.removeEventListener("click", boundFn);
// }, 3000);

// -----------------------------------------------

// Event - event object
// const button = document.getElementById("button");

// const clickButtonHandler = (event) => {
//   console.log(event);
// };

// button.addEventListener("click", clickButtonHandler);

// setTimeout(() => {
//   button.removeEventListener("click", clickButtonHandler);
// }, 3000);
// /*
// MouseEvent {isTrusted: true, screenX: 93, screenY: 582, clientX: 93, clientY: 446, …}
//   altKey: false
//   bubbles: true
//   button: 0
//   buttons: 0
//   cancelBubble: false
//   cancelable: true
//   clientX: 93
//   clientY: 446
//   composed: true
//   ctrlKey: false
//   currentTarget: null
//   defaultPrevented: false
//   detail: 1
//   eventPhase: 0
//   fromElement: null
//   isTrusted: true
//   layerX: 93
//   layerY: 838
//   metaKey: false
//   movementX: 0
//   movementY: 0
//   offsetX: 92
//   offsetY: 0
//   pageX: 93
//   pageY: 838
//   path: (5) [button#button, body, html, document, Window]
//   relatedTarget: null
//   returnValue: true
//   screenX: 93
//   screenY: 582
//   shiftKey: false
//   sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
//   srcElement: button#button
//   target: button#button
//   timeStamp: 2617.870000000039
//   toElement: button#button
//   type: "click"
//   view: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
//   which: 1
//   x: 93
//   y: 446
//   __proto__: MouseEvent
// */

// const buttons = document.querySelectorAll("button");

// const clickButtonHandler = (event) => {
//   event.target.disabled = true;
//   console.log(event);
// };

// buttons.forEach((btn) => {
//   btn.addEventListener("click", clickButtonHandler);
// });

// -----------------------------------------------

// Event - types
// const buttons = document.querySelectorAll("button");

// const clickButtonHandler = (event) => {
//   event.target.disabled = true;
//   console.log(event);
// };

// buttons.forEach((btn) => {
//   btn.addEventListener("mouseenter", clickButtonHandler);
// });

// infinite scrolling
// let curElementNumber = 0;

// function scrollHandler() {
//   const distanceToBottom = document.body.getBoundingClientRect().bottom;

//   if (distanceToBottom < document.documentElement.clientHeight + 150) {
//     const newDataElement = document.createElement("div");
//     curElementNumber++;
//     newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//     document.body.append(newDataElement);
//   }
// }

// window.addEventListener("scroll", scrollHandler);

// -----------------------------------------------

// Event - prevntDefault()
// const button = document.querySelector("form");

// button.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event);
// });
// /*
// SubmitEvent {isTrusted: true, submitter: button#title, type: "submit", target: form, currentTarget: form, …}
//   bubbles: true
//   cancelBubble: false
//   cancelable: true
//   composed: false
//   currentTarget: null
//   defaultPrevented: true
//   eventPhase: 0
//   isTrusted: true
//   path: (5) [form, body, html, document, Window]
//   returnValue: false
//   srcElement: form
//   submitter: button#title
//   target: form
//   timeStamp: 2540.234999999484
//   type: "submit"
//   __proto__: SubmitEvent
// */

// -----------------------------------------------

// Event - event.stopPropagation()

// const button = document.querySelector("button");
// const div = document.querySelector("div");

// div.addEventListener("click", () => {
//   console.log("CLICKED DIV");
// });

// button.addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log("CLICKED BUTTON");
// });

// -----------------------------------------------

// Event - this
// button.addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log("CLICKED BUTTON");
//   console.log(this); // `window` object
// });

// button.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("CLICKED BUTTON");
//   console.log(this); // `window` object
// });

// const list = document.querySelector("ul");

// list.addEventListener("click", function(event)  {
//   event.target.closest("li").classList.toggle("bg-red");
//   // form.submit();
//   button.click();
//   console.log(this); // <ul>...</ul>
//   console.log(event.currentTarget); // <ul>...</ul>
// });

// -----------------------------------------------

// Event - drag and drop
// event.dataTransfer.setData("text/plain", "This is text to drag");

// let dt = event.dataTransfer;
// dt.setData("text/uri-list", "https://www.google.com");
// dt.setData("text/plain", "https://www.google.com");

// let dt = event.dataTransfer;
// dt.setData("text/html", "Hello there, <strong>stranger</strong>");
// dt.setData("text/plain", "Hello there, stranger");

// -----------------------------------------------

// advance function - pure function
// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(15, 8)); // 23

// function add(num) {
//   return num + Math.random();
// }

// console.log(add(23)); // 23.????????

// -----------------------------------------------

// advance function - side effect
// let previousResult = 0;

// function add(num1, num2) {
//   const sum = num1 + num2;
//   previousResult = sum;
//   return sum;
// }

// const hobbies = ["programming", "gaming"];

// function printHobbies(hob) {
//   hob.push("Reading");

//   console.log(hob);
// }

// printHobbies(hobbies); // [ 'programming', 'gaming', 'Reading' ]

// -----------------------------------------------

// advance function - factory functions and closures
// function createTaxCalculator(amount, tax) {
//   return amount * tax;
// }

// console.log(createTaxCalculator(100, 0.19)); // 19

// function createTaxCalculator(tax) {
//   function calculateTax(amount) {
//     return amount * tax;
//   }
//   return calculateTax;
// }

// const vatAmount = createTaxCalculator(0.19);
// const incomeTax = createTaxCalculator(0.25);

// console.log(vatAmount(100)); // 19
// console.log(incomeTax(200)); // 50

// let multiplier = 1.1;
// function createTaxCalculator(tax) {
//   function calculateTax(amount) {
//     console.log(multiplier);
//     return amount * tax * multiplier;
//   }
//   return calculateTax;
// }

// const vatAmount = createTaxCalculator(0.19);
// const incomeTax = createTaxCalculator(0.25);

// multiplier = 1.2;

// console.log(vatAmount(100)); // 1.2 - 22.8
// console.log(incomeTax(200)); // 1.2 - 60

// let userName = "Hamid";

// function greetUser() {
//   console.log("Hi", userName);
// }

// greetUser(); // "Hi Hamid"

// let userName = "Hamid";

// function greetUser() {
//   console.log("Hi", userName);
// }

// userName = "Hamed";

// greetUser(); // "Hi Hamed"

// let userName = "Hamid";

// function greetUser() {
//   let name = userName;
//   console.log("Hi", name);
// }

// userName = "Hamed";

// greetUser(); // "Hi Hamed"

// let userName = "Hamid";

// function greetUser() {
//   let name = "Ali";
//   console.log("Hi", name);
// }

// let name = "Reza";

// userName = "Hamed";

// greetUser(); // "Hi Ali"

// let userName = "Hamid";

// function greetUser() {
// //   let name = "Ali";
//   console.log("Hi", name);
// }

// let name = "Reza";

// userName = "Hamed";

// greetUser(); // "Hi Reza"

// -----------------------------------------------

// advance function - IIFE
// (function () {
//   var age = 23;
//   console.log(age); // 23
// })();

// console.log(age); // Error: "age is not defined"

// {
//   const age = 23;
//   console.log(age); // 23
// }

// console.log(age); // Error: "age is not defined"

// -----------------------------------------------

// advance function - recursion
// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// console.log(powerOf(2, 3)); // 8

// function powerOf(x, n) {
//   return x * powerOf(x, n - 1);
// }

// console.log(powerOf(1, 1));
// /*
// Uncaught RangeError: Maximum call stack size exceeded
//     at powerOf (<anonymous>:2:3)
//     at powerOf (<anonymous>:2:14)
//     at powerOf (<anonymous>:2:14)
//     at powerOf (<anonymous>:2:14)
//     at powerOf (<anonymous>:2:14)
//     at powerOf (<anonymous>:2:14)
//     at powerOf (<anonymous>:2:14)
//     at powerOf (<anonymous>:2:14)
//     at powerOf (<anonymous>:2:14)
//     at powerOf (<anonymous>:2:14)
// */

// function powerOf(x, n) {
//   if (n === 1) {
//     return x;
//   }
//   return x * powerOf(x, n - 1);
// }

// console.log(powerOf(1, 1)); // 1

// function powerOf(x, n) {
//   return n === 1 ? x : x * powerOf(x, n - 1);
// }

// console.log(powerOf(1, 1)); // 1

// const myself = {
//   name: "Hamid",
//   friends: [
//     {
//       name: "Hamed",
//       friends: [
//         {
//           name: "Ali"
//         }
//       ]
//     },
//     {
//       name: "Reza"
//     }
//   ]
// }

// function printFriendName(person) {
//   for (const friends of person.friends) {
//     for (const friendsFriends of friends.friends) {
//       for (const x of n.friends) {
//         // ...
//       }
//     }
//   }
// }

// const myself = {
//   name: "Hamid",
//   friends: [
//     {
//       name: "Hamed",
//       friends: [
//         {
//           name: "Ali"
//         }
//       ]
//     },
//     {
//       name: "Reza"
//     }
//   ]
// }

// function printFriendName(person) {
//   const collectedNames = [];
//   for (const friend of person.friends) {
//     collectedNames.push(friend.name);
//   }
//   return collectedNames;
// }

// console.log(printFriendName(myself)); // [ 'Hamed', 'Reza' ]

// const myself = {
//   name: "Hamid",
//   friends: [
//     {
//       name: "Hamed",
//       friends: [
//         {
//           name: "Ali"
//         }
//       ]
//     },
//     {
//       name: "Reza"
//     }
//   ]
// }

// function printFriendName(person) {
//   const collectedNames = [];
//   for (const friend of person.friends) {
//     printFriendName(friend);
//   }
//   return collectedNames;
// }

// const myself = {
//   name: "Hamid",
//   friends: [
//     {
//       name: "Hamed",
//       friends: [
//         {
//           name: "Ali"
//         }
//       ]
//     },
//     {
//       name: "Reza"
//     }
//   ]
// }

// function printFriendName(person) {
//   const collectedNames = [];

//   if (!person.friends) {
//     return [];
//   }

//   for (const friend of person.friends) {
//     collectedNames.push(friend.name);
//     collectedNames.push(...printFriendName(friend));
//   }
//   return collectedNames;
// }

// console.log(printFriendName(myself)); // [ 'Hamed', 'Ali', 'Reza' ]

// -----------------------------------------------

// numbers and strings
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// console.log(Math.pow(2, 53) - 1); // 9007199254740991

// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324

// let result = 0.4 + 0.2;
// console.log(result === 0.6); // false

// -----------------------------------------------

// numbers and strings - binary system
// const num = (5).toString(2);
// console.log(num); // "101" -- 4 + 0 + 1

// const num = (0.2).toString(2);
// console.log(num); // "0.001100110011001100110011001100110011001100110011001101"

// const num = 0.2.toString(2);
// console.log(num); // "0.001100110011001100110011001100110011001100110011001101"

// const num = 1 / 3 + 1 / 3 + 1 / 3;
// console.log(num); // 1

// const num = 0.33333 + 0.33333 +0.33333;
// console.log(num.toString(10)); // "0.99999"

// const num = (0.2).toFixed(20);
// console.log(num); // "0.20000000000000001110"

// const num = (0.2 + 0.4).toFixed(2);
// console.log(num); // "0.60"

// -----------------------------------------------

// numbers and strings - big int
// const num = Number.MAX_SAFE_INTEGER;
// console.log(num); // 9007199254740991

// const num2 = 900719925474099148474857537585n;
// console.log(num2); // 900719925474099148474857537585n

// const num3 = -900719925474099148474857537585n;
// console.log(num3); // -900719925474099148474857537585n

// const num4 = 9007199254740991.3835n;
// console.log(num4); // SyntaxError: Invalid or unexpected token

// const num = 15n + 8n;
// console.log(num); // 23n

// const num2 = 15n + 8;
// console.log(num2); // TypeError: Cannot mix BigInt and other types, use explicit conversions

// const num = 15n + BigInt(8);
// console.log(num); // 23n

// const num2 = parseInt(15n) + 8;
// console.log(num2); // 23

// const num = 5n / 2n;
// console.log(num); // 2n

// -----------------------------------------------

// numbers and strings - Number
// console.log(Number.POSITIVE_INFINITY); // Infinity
// console.log(Number.NEGATIVE_INFINITY); // -Infinity
// console.log(1 / 0); // Infinity

// console.log(Number.isFinite(23)); // true
// console.log(Number.isFinite(Infinity)); // false

// function randomIntBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(randomIntBetween(1, 10)); // 1~10

// -----------------------------------------------

// numbers and strings - String
// const str = "hamid".toUpperCase();
// console.log(str); // "HAMID"
// console.log(str.startsWith("ha")); // false
// console.log(str.startsWith("HA")); // true

// -----------------------------------------------

// numbers and strings - template literal
// const name = "hamid";
// console.log(`Hi my name is ${name}`); // "Hi my name is hamid"

// function productDescription(strings, productName, productPrice) {
//     console.log(strings);
//   return `this is a product`;
// }

// const prodName = "JavaScript book";
// const prodPrice = 29.99;

// const productOutput = productDescription`This product (${prodName}) is ${prodName}.`;
// console.log(productOutput); // "this is a product"

// function productDescription(strings, productName, productPrice) {
//   console.log(strings); // [ 'This product (', ') is ', '.' ]
//   console.log(productName); // "JavaScript book"
//   console.log(productPrice); // 29.99
//   return `this is a product`;
// }

// const prodName = "JavaScript book";
// const prodPrice = 29.99;

// const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
// console.log(productOutput); // "this is a product"

// function productDescription(strings, productName, productPrice) {
//   return `${strings[0]}${productName}${strings[1]}${productPrice}${strings[2]}`;
// }

// const prodName = "JavaScript book";
// const prodPrice = 29.99;

// const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
// console.log(productOutput); // "This product (JavaScript book) is 29.99."

// function productDescription(strings, productName, productPrice) {
//   //   return `${strings[0]}${productName}${strings[1]}${productPrice}${strings[2]}`;
//   return { name: productName, price: productPrice };
// }

// const prodName = "JavaScript book";
// const prodPrice = 29.99;

// const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
// console.log(productOutput); // { name: 'JavaScript book', price: 29.99 }

// -----------------------------------------------

// numbers and strings - regular expression
// let userInput = "testest";
// let recommended = userInput;

// if (!userInput.includes("@")) {
//   userInput = `${userInput} is not valid, please choose another address, for example:
//     ${recommended}@gmail.com
//     ${recommended}345@gmail.com
//     ${recommended}roger@gmail.com
//     `;
// }

// console.log(userInput);
// /*
// testest is not valid, please choose another address, for example:
//     testest@gmail.com
//     testest345@gmail.com
//     testestroger@gmail.com
// */

// const userInput = "testtest.com";
// const regex = /^\S+@\S+\.\S+$/;
// console.log(regex.test(userInput)); // false
// console.log(regex.test("test@test.com")); // true

// const regex = /hamid/;
// console.log(regex.test("hamid")); // true
// console.log(regex.test("Hello there, hamid")); // true
// console.log(regex.test("Hamid")); // false

// const regex = /(h|H)amid/;
// console.log(regex.test("hamid")); // true
// console.log(regex.test("Hello there, hamid")); // true
// console.log(regex.test("amid")); // false

// const regex = /.amid/;
// console.log(regex.test("hamid")); // true
// console.log(regex.test("Hello there, hamid")); // true
// console.log(regex.test("Hamid")); // true
// console.log(regex.test("Samid")); // true
// console.log(regex.test("Jamid")); // true

// const regex = /.amid/;
// console.log(regex.test("hamid")); // true
// console.log(regex.test("Hello there, hamid")); // true
// console.log(regex.test("mid")); // false
// console.log(regex.test("Samid")); // true
// console.log(regex.test("amid")); // false

// const regex = /.amid/;
// console.log(regex.test("hamid")); // true
// console.log(regex.exec("Hamid")); // [ 'Hamid', index: 0, input: 'Hamid', groups: undefined ]
// console.log(regex.exec("Hello There, Hamid")); // [ 'Hamid', index: 13, input: 'Hello There, Hamid', groups: undefined ]
// console.log(regex.exec("hamid")); // [ 'hamid', index: 0, input: 'hamid', groups: undefined ]

// const regex = /.amid/;

// const result = "Hi, Hamid".match(regex);
// const search = "Hi, Hamid".search(regex);
// console.log(result); // [ 'Hamid', index: 4, input: 'Hi, Hamid', groups: undefined ]
// console.log(search); // 4

// -----------------------------------------------

// async
// const button = document.querySelector("button");
// const output = document.querySelector("p");

// function trackUserHandler() {}

// button.addEventListener("click", trackUserHandler);

// console.log("Hamid");

// setTimeout(() => console.log("Hello"), 2000);

// console.log("After hello");

// /*
// 1. "Hamid"
// 2. "After hello"
// 3. "Hello"
// */

// -----------------------------------------------

// promises
// // callback
// navigator.geolocation.getCurrentPosition(() =>
//   setTimeout(() => doMoreAsyncStuff(() => console.log("Helllo")), 1000)
// );

// // Promise
// someAsyncTask().then(() => anotherTask()), then(() => yetAnotherTask()).then(...);

// -----------------------------------------------

// HTTP
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://my-json-server.typicode.com/typicode/demo/posts");

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://my-json-server.typicode.com/typicode/demo/posts");
// xhr.send();

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://my-json-server.typicode.com/typicode/demo/posts");
// xhr.onload = () => console.log(xhr.response);
// xhr.send();

// /*
// [
//   {
//     "id": 1,
//     "title": "Post 1"
//   },
//   {
//     "id": 2,
//     "title": "Post 2"
//   },
//   {
//     "id": 3,
//     "title": "Post 3"
//   }
// ]
// */

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://my-json-server.typicode.com/typicode/demo/posts");

// xhr.onload = function () {
//   const listOfPosts = JSON.parse(xhr.response);
//   console.log(listOfPosts);
// };

// xhr.send();

// /*
// (3) [{…}, {…}, {…}]
//   0: {id: 1, title: "Post 1"}
//   1: {id: 2, title: "Post 2"}
//   2: {id: 3, title: "Post 3"}
//   length: 3
//   __proto__: Array(0)
// */

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://my-json-server.typicode.com/typicode/demo/posts");

// xhr.responseType = "json";

// xhr.onload = function () {
//   //   const listOfPosts = JSON.parse(xhr.response);
//   console.log(this.response);
// };

// xhr.send();

// /*
// (3) [{…}, {…}, {…}]
//   0: {id: 1, title: "Post 1"}
//   1: {id: 2, title: "Post 2"}
//   2: {id: 3, title: "Post 3"}
//   length: 3
//   __proto__: Array(0)
// */

// const listElement = document.querySelector(".posts");
// const postTemplate = document.getElementById("single-post");

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://my-json-server.typicode.com/typicode/demo/posts");

// xhr.responseType = "json";

// xhr.onload = function () {
//   //   const listOfPosts = JSON.parse(xhr.response);
//   const listOfPosts = this.response;
//   for (const post of listOfPosts) {
//     const postEl = document.importNode(postTemplate.content, true);
//     postEl.querySelector("h2").textContent = post.title.toUpperCase();
//     postEl.querySelector("p").textContent = post.id;
//     listElement.append(postEl);
//   }

//   console.log(listOfPosts);
// };

// /*
// (3) [{…}, {…}, {…}]
//   0: {id: 1, title: "Post 1"}
//   1: {id: 2, title: "Post 2"}
//   2: {id: 3, title: "Post 3"}
//   length: 3
//   __proto__: Array(0)
// */

// xhr.send();

// const person = {
//   name: "Hamid",
//   age: 23,
//   hobbies: [
//     { id: "h1", title: "Gaming" },
//     { id: "h2", title: "Programming" },
//   ],
//   isInstructor: true,
// };

// JSONs = JSON.stringify(person);

// /*
// {
//     "name": "Hamid",
//     "age": 23,
//     "hobbies": [
//         { "id": "h1", "title": "Gaming" },
//         { "id": "h2", "title": "Programming" }
//     ],
//     "isInstructor": true
// }

// or

// "{"name":"Hamid","age":23,"hobbies":[{"id":"h1","title":"Gaming"},{"id":"h2","title":"Programming"}],"isInstructor":true}"
// */

// console.log(typeof JSONs); // "string"

// const person = {
//   name: "Hamid",
//   age: 23,
//   hobbies: [
//     { id: "h1", title: "Gaming" },
//     { id: "h2", title: "Programming" },
//   ],
//   isInstructor: true,
// };

// JSONs = JSON.stringify(person);
// const parsedData = JSON.parse(JSONs);

// console.log(parsedData);
// /*
// {name: "Hamid", age: 23, hobbies: Array(2), isInstructor: true}
//   age: 23
//   hobbies: Array(2)
//     0: {id: "h1", title: "Gaming"}
//     1: {id: "h2", title: "Programming"}
//     length: 2
//     __proto__: Array(0)
//   isInstructor: true
//   name: "Hamid"
//   __proto__: Object
// */
// console.log(typeof JSONs); // "string"
// console.log(typeof parsedData); // "object"

// -----------------------------------------------

// third-party libraries - lodash
// const customers = ["Hamid", "Hamed", "Ali"];
// const activeCustomers = ["Hamid", "Hamed"];
// const inactiveCustomers = _.difference(customers, activeCustomers);

// console.log(inactiveCustomers); // ["Ali"]

// -----------------------------------------------

// third-party libraries - axios
// axios.get("https://jsonplaceholder.typicode.com/posts");
// axios.post("https://jsonplaceholder.typicode.com/posts", fd);
// axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);

// async function fetchPosts() {
//   try {
//     const responseData = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );

//     const listOfPosts = responseData.data;
//     for (const post of listOfPosts) {
//       const postEl = document.importNode(postTemplate.content, true);
//       postEl.querySelector("h2").textContent = post.title.toUpperCase();
//       postEl.querySelector("p").textContent = post.body;
//       postEl.querySelector("li").id = post.id;
//       listElement.append(postEl);
//     }
//   } catch (error) {
//     alert(error.message);
//   }
// }

// function createPost(userId = Math.random()) {
//   const fd = new FormData(form);
//   fd.append("userId", userId);

//   axios.post("https://jsonplaceholder.typicode.com/posts", fd);
// }

// -----------------------------------------------

// module
// import("path").then((module) => {});

// import("./test.js").then((module) => {
//   new module.Tooltip();
// });

// -----------------------------------------------

// webpack
// const path = require("path");

// module.exports = {
//   entry: "./src/app.js",
//   output: {
//     filename: "app.js",
//     path: path.resolve(__dirname, "assets", "scripts"),
//   },
// };

// const path = require("path");
// const CleanPlugin = require("clean-webpack-plugin");

// module.exports = {
//   mode: "development",
//   entry: "./src/app.js",
//   output: {
//     filename: "app.js",
//     path: path.resolve(__dirname, "assets", "scripts"),
//     publicPath: "./assets/scripts",
//   },
//   devool: "eval-cheap-module-source-map",
//   plugins: [new CleanPlugin.CleanWebpackPlugin()],
// };

// -----------------------------------------------

// storage - local storage
// const storeBtn = document.getElementById("store-btn");
// const retrBtn = document.getElementById("retrieve-btn");

// const user = {
//   name: "Hamid",
//   age: 23,
//   hobbies: ["Programming", "Gaming"],
// };

// storeBtn.addEventListener("click", () => {
//   localStorage.setItem("user", JSON.stringify(user));
// });
// retrBtn.addEventListener("click", () => {
//   JSON.parse(localStorage.getItem("user"));
// });

// -----------------------------------------------

// storage - session storage
// const storeBtn = document.getElementById("store-btn");
// const retrBtn = document.getElementById("retrieve-btn");

// const user = {
//   name: "Hamid",
//   age: 23,
//   hobbies: ["Programming", "Gaming"],
// };

// storeBtn.addEventListener("click", () => {
//   sessionStorage.setItem("user", JSON.stringify(user));
// });
// retrBtn.addEventListener("click", () => {
//   JSON.parse(sessionStorage.getItem("user"));
// });

// -----------------------------------------------

// storage - session storage
// const storeBtn = document.getElementById("store-btn");
// const retrBtn = document.getElementById("retrieve-btn");

// const userId = "u123";

// storeBtn.addEventListener("click", () => {
//   document.cookie = `uid=${userId}`;
// });
// retrBtn.addEventListener("click", () => {
//   console.log(document.cookie);
// });

// -----------------------------------------------

// storage - cookies
// const storeBtn = document.getElementById("store-btn");
// const retrBtn = document.getElementById("retrieve-btn");

// const userId = "u123";

// storeBtn.addEventListener("click", () => {
//   document.cookie = `uid=${userId}`;
// });
// retrBtn.addEventListener("click", () => {
//   console.log(document.cookie);
// });

// const storeBtn = document.getElementById("store-btn");
// const retrBtn = document.getElementById("retrieve-btn");

// const userId = "u123";

// storeBtn.addEventListener("click", () => {
//   document.cookie = `uid=${userId}; max-age=10`; // expires after x seconds
// });
// retrBtn.addEventListener("click", () => {
//   console.log(document.cookie);
// });

// const storeBtn = document.getElementById("store-btn");
// const retrBtn = document.getElementById("retrieve-btn");

// const userId = "u123";

// storeBtn.addEventListener("click", () => {
//   document.cookie = `uid=${userId}; expires=Fri, 31 Dec 9999 23:59:59 GMT`; // expires after this date
// });
// retrBtn.addEventListener("click", () => {
//   console.log(document.cookie);
// });

// -----------------------------------------------

// storage - indexedDB
// const storeBtn = document.getElementById("store-btn");
// const retrBtn = document.getElementById("retrieve-btn");

// const dbRequest = indexedDB.open("StorageDummy", 1);

// dbRequest.onupgradeneeded = function (event) {
//   const db = event.target.result;
//   const objStore = db.createObjectStore("product", { keyPath: "id" });
//   objStore.transaction.oncomplete = function (event) {
//     const productsStore = db
//       .transaction("products", "readwrite")
//       .objectStore("products");

//     productsStore.add({
//       id: "p1",
//       title: "A First Product",
//       price: 12.99,
//       tags: ["Expensive", "Luxury"],
//     });
//   };
// };

// dbRequest.onerror = function (event) {
//   console.log("ERROR!");
// };

// storeBtn.addEventListener("click", () => {});
// retrBtn.addEventListener("click", () => {});

// ---

// const storeBtn = document.getElementById("store-btn");
// const retrBtn = document.getElementById("retrieve-btn");

// let db;

// const dbRequest = indexedDB.open("StorageDummy", 1);

// dbRequest.onsuccess = function (event) {
//   db = event.target.result;
// };

// dbRequest.onupgradeneeded = function (event) {
//   db = event.target.result;

//   const objStore = db.createObjectStore("products", { keyPath: "id" });

//   objStore.transaction.oncomplete = function (event) {
//     const productsStore = db
//       .transaction("products", "readwrite")
//       .objectStore("products");
//     productsStore.add({
//       id: "p1",
//       title: "A First Product",
//       price: 12.99,
//       tags: ["Expensive", "Luxury"],
//     });
//   };
// };

// dbRequest.onerror = function (event) {
//   console.log("ERROR!");
// };

// storeBtn.addEventListener("click", () => {
//   if (!db) {
//     return;
//   }
//   const productsStore = db
//     .transaction("products", "readwrite")
//     .objectStore("products");
//   productsStore.add({
//     id: "p2",
//     title: "A Second Product",
//     price: 122.99,
//     tags: ["Expensive", "Luxury"],
//   });
// });

// retrBtn.addEventListener("click", () => {
//   const productsStore = db
//     .transaction("products", "readwrite")
//     .objectStore("products");
//   const request = productsStore.get("p2");

//   request.onsuccess = function () {
//     console.log(request.result);
//     // {id: "p2", title: "A Second Product", price: 122.99, tags: Array(2)}
//   };
// });

// -----------------------------------------------

// feature detection
// const button = document.querySelector("button");
// const paragraphText = document.querySelector("p");

// button.addEventListener("click", () => {
//   const text = paragraphText.textContent;
//   navigator.clipboard
//     .writeText(text)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
// });

// const button = document.querySelector("button");
// const paragraphText = document.querySelector("p");

// button.addEventListener("click", () => {
//   const text = paragraphText.textContent;
//   if (navigator.clipboard) {
//     navigator.clipboard
//       .writeText(text)
//       .then((result) => console.log(result))
//       .catch((error) => console.log(error));
//   } else {
//     console.log("Feature not available, please copy manually!");
//   }
// });

// -----------------------------------------------

// meta-programming - Symbol

// const uid = Symbol();
// console.log(uid, typeof uid); // Symbol() "symbol"

// const uid = Symbol("uid");

// const user = {
//   [uid]: "p1",
//   name: "Hamid",
//   age: 23
// };

// console.log(user); // { name: 'Hamid', age: 23, [Symbol(uid)]: 'p1' }

// console.log(Symbol("uid") === Symbol("uid"));

// const uid = Symbol("uid");

// const user = {
//   [uid]: "p1",
//   name: "Hamid",
//   age: 23,
//   [Symbol.toStringTag]: "User"
// };

// user[uid] = "p2";
// console.log(user.toString()); // "[object User]"

// -----------------------------------------------

// meta-programming - iterator
// const company = {
//   employees: ["Hamid", "Hamed", "Ali", "Reza", "Majid", "Mehrdad", "Morteza"]
// };

// const company = {
//   currentEmployee: 0,
//   employees: ["Hamid", "Hamed", "Ali", "Reza", "Majid", "Mehrdad", "Morteza"],
//   next() {
//     if (this.currentEmployee >= this.employees.length) {
//       return { value: this.currentEmployee, done: true };
//     }
//     const returnedValue = {
//       value: this.employees[this.currentEmployee],
//       done: false
//     };
//     this.currentEmployee++;
//     return returnedValue;
//   }
// };

// console.log(company.next()); // { value: 'Hamid', done: false }
// console.log(company.next()); // { value: 'Hamed', done: false }
// console.log(company.next()); // { value: 'Ali', done: false }
// console.log(company.next()); // { value: 'Reza', done: false }
// console.log(company.next()); // { value: 'Majid', done: false }
// console.log(company.next()); // { value: 'Mehrdad', done: false }
// console.log(company.next()); // { value: 'Morteza', done: false }
// console.log(company.next()); // { value: 7, done: true }

// const company = {
//   currentEmployee: 0,
//   employees: ["Hamid", "Hamed", "Ali", "Reza", "Majid", "Mehrdad", "Morteza"],
//   next() {
//     if (this.currentEmployee >= this.employees.length) {
//       return { value: this.currentEmployee, done: true };
//     }
//     const returnedValue = {
//       value: this.employees[this.currentEmployee],
//       done: false
//     };
//     this.currentEmployee++;
//     return returnedValue;
//   }
// };

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }
// /*
// "Hamid"
// "Hamed"
// "Ali"
// "Reza"
// "Majid"
// "Mehrdad"
// "Morteza"
//  */

// -----------------------------------------------

// meta-programming - generator
// const company = {
//   currentEmployee: 0,
//   employees: ["Hamid", "Hamed", "Ali", "Reza", "Majid", "Mehrdad", "Morteza"],
//   next() {
//     if (this.currentEmployee >= this.employees.length) {
//       return { value: this.currentEmployee, done: true };
//     }
//     const returnedValue = {
//       value: this.employees[this.currentEmployee],
//       done: false
//     };
//     this.currentEmployee++;
//     return returnedValue;
//   }
// };

// let employee = company.next();

// for (employee of company) {
//   console.log(employee.value); // TypeError: company is not iterable
// }

// const company = {
//   currentEmployee: 0,
//   employees: ["Hamid", "Hamed", "Ali", "Reza", "Majid", "Mehrdad", "Morteza"],
//   next() {
//     if (this.currentEmployee >= this.employees.length) {
//       return { value: this.currentEmployee, done: true };
//     }
//     const returnedValue = {
//       value: this.employees[this.currentEmployee],
//       done: false
//     };
//     this.currentEmployee++;
//     return returnedValue;
//   },

//   [Symbol.iterator]: function* employeeGenerator() {
//     let employee = company.next();

//     for (employee of company) {
//       yield employee.value;
//       console.log(employee.value);
//     }
//   }
// };

// const company = {
//   employees: ["Hamid", "Hamed", "Ali", "Reza", "Majid", "Mehrdad", "Morteza"],
//   getEmployee: function* employeeGenerator() {
//     let currentEmployee = 0;
//     while (currentEmployee < this.employees.length) {
//       yield this.employees[currentEmployee];
//       currentEmployee++;
//     }
//   }
// };

// let it = company.getEmployee();

// // console.log(it.next()); // { value: 'Hamid', done: false }
// // console.log(it.next()); // { value: 'Hamed', done: false }
// // console.log(it.next()); // { value: 'Ali', done: false }
// // console.log(it.next()); // { value: 'Reza', done: false }
// // console.log(it.next()); // { value: 'Majid', done: false }
// // console.log(it.next()); // { value: 'Mehrdad', done: false }
// // console.log(it.next()); // { value: 'Morteza', done: false }
// // console.log(it.next()); // { value: undefined, done: true }

// const company = {
//   employees: ["Hamid", "Hamed", "Ali", "Reza", "Majid", "Mehrdad", "Morteza"],
//   [Symbol.iterator]: function* employeeGenerator() {
//     let currentEmployee = 0;
//     while (currentEmployee < this.employees.length) {
//       yield this.employees[currentEmployee];
//       currentEmployee++;
//     }
//   }
// };

// for (const employee of company) {
//   console.log(employee);
// }
// /*
// "Hamid"
// "Hamed"
// "Ali"
// "Reza"
// "Majid"
// "Mehrdad"
// "Morteza"
//  */

// console.log([...company]);
// /*
// (7) ["Hamid", "Hamed", "Ali", "Reza", "Majid", "Mehrdad", "Morteza"]
//   0: "Hamid"
//   1: "Hamed"
//   2: "Ali"
//   3: "Reza"
//   4: "Majid"
//   5: "Mehrdad"
//   6: "Morteza"
//   length: 7
//   __proto__: Array(0)
//  */

// -----------------------------------------------

// meta-programming - Reflect API
// const person = {
//   name: "Hamid"
// };

// delete person.name;

// console.log(person); // {}

// const person = {
//   name: "Hamid"
// };

// Reflect.deleteProperty(person, "name");

// console.log(person); // {}

// -----------------------------------------------

// meta-programming - Proxy API
// const person = {
//   name: "Hamid"
// };

// personHandler = {
//   get(obj, propertyName) {
//     console.log(propertyName);
//     return obj[propertyName];
//   }
// };

// const pPerson = new Proxy(person, personHandler);

// console.log(pPerson.name); // "name" "Hamid"

// const person = {
//   name: "Hamid"
// };

// personHandler = {
//   get(obj, propertyName) {
//     console.log(propertyName);
//     return "Yo guys and girls";
//   }
// };

// const pPerson = new Proxy(person, personHandler);

// console.log(pPerson.name); // "name" "Yo guys and girls"
// console.log(person, pPerson);
// /*
// {name: "Hamid"}  Proxy {name: "Hamid"}
//   name: "Hamid"
//   __proto__: Object
// */

// const person = {
//   name: "Hamid"
// };

// personHandler = {
//   get(obj, propertyName) {
//     console.log(propertyName);
//     return obj[propertyName] || "NOT FOUND";
//   }
// };

// const pPerson = new Proxy(person, personHandler);

// console.log(pPerson.name); // "name" "Hamid"
// console.log(pPerson.length); // "length" "NOT FOUND"

// const person = {
//   name: "Hamid"
// };

// personHandler = {
//   get(obj, propertyName) {
//     console.log(propertyName);
//     if (propertyName === "length") {
//       return 0;
//     }
//     return obj[propertyName] || "NOT FOUND";
//   }
// };

// const pPerson = new Proxy(person, personHandler);

// console.log(pPerson.name); // "name" "Hamid"
// console.log(pPerson.length); // "length" 0
// console.log(pPerson.rating); // "rating" "NOT FOUND"

// -----------------------------------------------

// meta-programming - Proxy trap
// const person = {
//   name: "Hamid"
// };

// personHandler = {
//   get(obj, propertyName) {
//     console.log(propertyName);
//     if (propertyName === "length") {
//       return 0;
//     }
//     return obj[propertyName] || "NOT FOUND";
//   },
//   set(obj, propertyName, newValue) {
//     obj[propertyName] = newValue;
//   }
// };

// const pPerson = new Proxy(person, personHandler);
// pPerson.rating = 5;

// console.log(pPerson.rating); // "rating" 5

// const person = {
//   name: "Hamid"
// };

// personHandler = {
//   get(obj, propertyName) {
//     console.log(propertyName);
//     if (propertyName === "length") {
//       return 0;
//     }
//     return obj[propertyName] || "NOT FOUND";
//   },
//   set(obj, propertyName, newValue) {
//     if (propertyName === "rating") {
//       return;
//     }
//     obj[propertyName] = newValue;
//   }
// };

// const pPerson = new Proxy(person, personHandler);
// pPerson.rating = 5;

// console.log(pPerson.rating); // "rating" "NOT FOUND"

// const person = {
//   name: "Hamid"
// };

// personHandler = {
//   get(obj, propertyName) {
//     console.log(propertyName);
//     if (propertyName === "length") {
//       return 0;
//     }
//     return obj[propertyName] || "NOT FOUND";
//   },
//   set(obj, propertyName, newValue) {
//     console.log("Sending data ...");
//     if (propertyName === "rating") {
//       return;
//     }
//     obj[propertyName] = newValue;
//   }
// };

// const pPerson = new Proxy(person, personHandler);
// pPerson.rating = 5;

// console.log(pPerson.age);
// /*
// "Sending data ..."
// "age" "NOT FOUND"
// */

// -----------------------------------------------

// Node.js - filesystem
// console.log("Hamid");

// document.getElementById("my-id"); // ReferenceError: document is not defined

// const filesystem = require("fs");
// // import filesystem from "fs";

// filesystem.writeFile("test.md", "# Hello Hamid", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//       console.log("wrote to file!")
//   }
// });

// const filesystem = require("fs");

// filesystem.writeFile("test.md", "# Hello Hamid", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("wrote to file!");
//   }
// });

// filesystem.readFile("test.md", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// -----------------------------------------------

// Node.js - http
// const http = require("http");
// const fs = require("fs");

// const readedFile = fs.readFile("test.html", "utf8", (err, data) => {
//     if (err) throw err;
// });

// const server = http.createServer((request, response) => {
//   fs.readFile("test.html", (err, data) => {
//     console.log(typeof data);
//     response.write(data + typeof data);
//     response.end();
//   });
// });

// server.listen(3000);

// ---

// const http = require("http");

// const server = http.createServer((request, response) => {
//   response.setHeader("Content-Type", "text/html");
//   response.write("<h1>Hamid</h1>");
//   response.end();
// });

// server.listen(3000);

// const fs = require("fs");
// const http = require("http");

// const server = http.createServer((request, response) => {
//   let body = [];
//   request.on("data", (chunk) => {
//     body.push(chunk);
//   });
//   request.on("end", () => {
//     body = Buffer.concat(body).toString();
//     console.log(body);
//   });
//   response.setHeader("Content-Type", "text/html");
//   fs.readFile("test.html", (err, data) => {
//     if (err) throw err;
//     response.write(data);
//     response.end();
//   });
// });

// server.listen(3000);

// const fs = require("fs");
// const http = require("http");

// const server = http.createServer((request, response) => {
//   let body = [];
//   request.on("data", (chunk) => {
//     body.push(chunk);
//   });
//   request.on("end", () => {
//     body = Buffer.concat(body).toString();
//     let userName = "Unknown User";
//     if (body) {
//       userName = body.split("=")[1];
//     }

//     fs.readFile("test.html", (err, data) => {
//       if (err) throw err;
//       response.write(`<h1>Hello ${userName}</h1> ${data}`);
//       response.end();
//     });
//   });
//   response.setHeader("Content-Type", "text/html");
// });

// server.listen(3000);

// -----------------------------------------------

// Node.js - Express and ejs
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use((request, response, next) => {
//   response.setHeader("Content-Type", "text/html");
//   next();
// });

// app.use((request, response, next) => {
//   const userName = request.body.username || "KNOWN USERNAME";
//   response.render("index", { user: userName });
// });

// app.listen(3000);
