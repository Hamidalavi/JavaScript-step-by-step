// make sure all text inputs in html are string (even it's type is number) as javaScript detection. make sure dont make mistake

let number = 23;
let array = [1, 2, 3];
let string = "Hello Hamid";
let Unicode = "e\u0301";
let object = {};
let value; // some value

// common -----------------------------------------------

typeof value; // can examine a value and tell you what type it is (not function, but useful)

isNaN(number); // check NaN of value as boolean

isFinite(number); // check Finite of value as boolean

Unicode.normalize(); // returns Unicode into normalize string form

addEventListener("event", functionname); // adds event and we can choose what happen if we click or hover or exit and etc
removeEventListener("event", functionname); // removes event and we can choose what happen if we click or hover or exit and etc
// learn more in DOM.md file

// output -----------------------------------------------

console.log(value); // logs the output

alert(value); // visual log output

prompt(string); // input from user

// Number -----------------------------------------------

Number(value); // convert any type to number type

Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MIN_VALUE; // 5e-324

Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991

Number.POSITIVE_INFINITY; // Infinity
Number.NEGATIVE_INFINITY; // -Infinity

Number.EPSILON; // 2.220446049250313e-16

Number.isInteger(value); // returns true if the value passed is an integer, false otherwise

Number.isNaN(value); // returns true if the value passed is an NaN, false otherwise

Number.isFinite(value); // returns true if passed value is finite, false otherwise

number.toFixed(num); // show decimal as you set. for example x.toFixed(2); shows with 2 decimal in output

number.toPrecision(num); // is similar, but specifies how many significant digits should be used torepresent the value

number.toExponential(); // returns a string containing a number represented in exponential notation

parseInt(value); // converts a string to an integer
+value; // converts a string to an integer

parseFloat(value); // converts a string to a floating-point number

// String -----------------------------------------------

String(value); // convert any type to string type

String.raw`function`; // show raw format of string (ex: show \t or \n and etc.)

string.toUpperCase(); // converts all the alphabetic characters in a string to uppercase
string.toLowerCase(); // converts all the alphabetic characters in a string to lowercase

string.repeat(number); // copy that string x times (number 0 is empty string)

string.startsWith(string); // returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object. Otherwise returns false
string.startsWith(string, number); // returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object starting at position. Otherwise returns false

string.endsWith(string); // returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object starting at endPosition – length(this). Otherwise returns false
string.endsWith(string, number); // returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object starting at endPosition – length(this). Otherwise returns false

string.includes(string); // returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false

value.toString(); // converts all types (or any types) to string

// Object -----------------------------------------------

Object.create(value); // creates an object that has the specified prototype or that has null prototype

Object.preventExtensions(object); // prevent from adding properties

Object.keys(object); // shows all object's keys (returns an array of all enumerable properties)

Object.setPrototypeOf(object2, object1); // the object to change its prototype (sets the prototype of an object -- one object delegates to another object)
Object.setPrototypeOf(
  {
    /** put value in new object */
  },
  object1
); // one object delegates to another object

Object.getOwnPropertySymbols(object); // returns an array of all symbol properties found directly on object
Object.getOwnPropertyNames(object); // returns the names of the own properties of an object

Object.assign(target, source); // copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object (you can put infinite sources)

eval("Hamid"); // evaluates JavaScript code and executes it (string of code)(ex: "let a = 20;")

setTimeout(() => {
  console.log("Hello");
}, 1000); // this command is executed after the specified time (to create a delay)

setInterval(() => {
  console.log("Hello");
}, 1000); // this command is executed repeatedly after the time we specified

// Array -----------------------------------------------

array.join("!"); // join something beween array elements

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
} // shows values in array

for (let v of array) {
  console.log(v);
} // shows values in array (awesome)

array.push(value); // add new elements (keys) to an array, and returns the new length of the array

array.length(value); // gets or sets the length of the array

array.forEach(value); // do specified action for each keys or elements in an array

array.reverse(); // reverses the elements in an array

Array(number).fill(value); // filling the section identified by start and end with value

array.copyWithin(); // copying a section of the array identified by start and end to the same array starting at position target

array.some(number); // determines whether the specified callback function returns true for any element of an array (find)

array.find(number); // find calls predicate once for each element of the array

array.findIndex(number); // find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true

array.indexOf(number); // returns the index of the first occurrence of a value in an array

[...array.values()]; // returns an iterable of values in the array

[...array.keys()]; // returns an iterable of keys in the array

[...array.entries()]; // returns an iterable of key, value pairs for every entry in the array

[].concat(array1, array2); // combines two or more arrays (you can use n array to combine; and can use Symbol.isConcatSpreadable for enable/disable spreading arrays)

ArrayBuffer(number); // represents a raw buffer of binary data

Uint8Array(number); // a typed array of 8-bit unsigned integer values
Uint16Array(number); // a typed array of 16-bit unsigned integer values
Uint32Array(number); // a typed array of 32-bit unsigned integer values

// Math -----------------------------------------------

// Trigonometry (triangle)
Math.cosh(); // hyperbolic cosine
Math.acosh(); // hyperbolic arccosine
Math.sinh(); // hyperbolic sine
Math.asinh(); // hyperbolic arcsine
Math.tanh(); // hyperbolic tangent
Math.atanh(); // hyperbolic arctangent
Math.hypot(); // the squareroot of the sum of the squares (i.e., the generalized Pythagorean theorem)

// Arithmetic
Math.cbrt(); // cube root
Math.clz32(); // count leading zeros in 32-bit binary representation
Math.expm1(); // the same as `exp(x) - 1`
Math.log2(); // binary logarithm (log base 2)
Math.log10(); // log base 10
Math.log1p(); // the same as `log(x + 1)`
Math.imul(); // 32-bit integer multiplication of two numbers

// Meta
Math.sign(); // returns the sign of the number
Math.trunc(); // returns only the integer part of a number
Math.fround(); // rounds to nearest 32-bit (single precision) floating-point value

Math.pow(number, number); // returns the value of a base expression taken to a specified power
Math.random(); // returns a pseudorandom number between 0 and 1
Math.sqrt(); // returns the square root of a number
Math.abs(number); // returns the absolute value of a number (e.g. -5 => 5)
Math.PI; // this is the ratio of the circumference of a circle to its diameter (3.14)
Math.E; // the mathematical constant e. This is Euler's number, the base of natural logarithms (2.718)
