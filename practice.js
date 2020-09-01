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

