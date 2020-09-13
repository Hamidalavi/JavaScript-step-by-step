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

let person = { name: "Hamid" };
const persons = new WeakMap();

persons.set(person, "Extra Info");

person = null;

console.log(persons);
/*
WeakMap {{…} => "Extra Info"}
[[Entries]]
0: {Object => "Extra Info"}
key: {name: "Hamid"}
value: "Extra Info"
__proto__: WeakMap
*/
