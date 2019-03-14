/* eslint-disable one-var */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // base case: n = 0
  // recursive case: n * factorial(n-1)
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }
  var result = n * factorial(n - 1);
  return result;
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (!Array.isArray(array)) {
    throw new Error('not an array ' + JSON.stringify(array));
  }
  // sum(array.slice(1)};
  if (array.length === 0) {
    return 0;
  }
  const first = array[0];
  if (typeof first !== 'number') {
    throw new Error('not a number: ' + JSON.stringify({ first, array }));
  }
  const restOfArray = array.slice(1);
  const sumOfRest = sum(restOfArray);
  return first + sumOfRest;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
// base case; aray of numbers
// recursive case, one of the elements is an array
var arraySum = function (array) {
  var final;
  if (array.length > 0) {
    var first = array[0];
    var rest = array.slice(1);
    var sumOfRest = arraySum(rest);
    if (Array.isArray(first)) {
      final = arraySum(first) + sumOfRest;
    } else {
      final = first + sumOfRest;
    }
  } else {
    return 0;
  }
  return final;
};

/**
 * 4. Check if a number is even.
 *
 * @param {number} n
 * @returns {boolean}
 */
function isEven(n) {
  // keep incrementing by two until you reach or exceed n
  var num = Math.abs(n);
  if (num === 0) {
    return true;
  }
  if (num === 1) {
    return false;
  }
  return isEven(num - 2);
}

/**
 * 5. Sum all integers below a given integer.
 * @param {number} n
 * @returns {number}
 */
// sumBelow(10); // 45
// sumBelow(7); // 21
// basecase: n = 0, return 0
// recursive n-1 + sumBelow(n-2)
//
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  }
  if (n > 0) {
    const start = n - 1;
    var below = sumBelow(start);
    return start + below;
  }
  const start = n + 1;
  var above = sumBelow(start);
  return start + above;
};

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {Array<number>}
 */
// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8] (x+1)
var range = function(x, y) {
  var numbers = [];
  var start;
  if (x < y) {
    start = x + 1;
  } else {
    start = x - 1;
  }
  if ((x === y) || (start === y)) {
    return numbers;
  }
  const rest = range(start, y);
  numbers.push(start);
  return numbers.concat(rest);
};

/**
 * 7. Compute the exponent of a number.
 * @param {number} base
 * @param {number} exp
 * @returns {number}
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
*/
var exponent = function(base, exp) {
  if (exp >= 0) {
    if (exp === 0) {
      return 1;
    }
    if (exp === 1) {
      return base;
    }
    if (exp > 0) {
      return base * exponent(base, exp - 1);
    }
  }
  if (exp < 0) {
    return 1 / (base * exponent(base, -exp - 1));
  }
};

/**
 * @param {number} n
 * @returns {boolean}
// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
// if n === 1, return true
// divide n by 2, if isInteger, divide by 2 again
*/

var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }
  var halfOfN = n / 2;
  if ((Number.isInteger(halfOfN)) && !(n === 0)) {
    return powerOfTwo(halfOfN);
  }
  return false;
};

/**
 * // 9. Write a function that reverses a string.
 * @param {string} string
 * @returns {string}
 * recursive case: switch first and last, then switch rest
 * basecase: switch first and last or string of one element
*/

var reverse = function(string) {
  if (string.length === 0) {
    return '';
  }
  if (string.length === 1) {
    return string;
  }
  var first = string[0];
  var last = string[string.length - 1];
  var rest = string.slice(1, -1);
  return last + reverse(rest) + first;
};

/**
 * // 10. Write a function that determines if a string is a palindrome.
 * @param {string} string
 * @returns {boolean}
 *
 */
// if string[first] === string[last], palindrome(string.slice(1, -1))
// if string.length === 1 return string
// if string.length === 0, ??

var palindrome = function(string) {
  var newStr;
  if ((string.length === 1) || (string.length === 0)) {
    return true;
  }
  if (string.includes(' ')) {
    newStr = string.split(' ').join('').toLowerCase();
  } else {
    newStr = string.toLowerCase();
  }
  var first = newStr[0];
  var last = newStr[newStr.length - 1];
  var rest = newStr.slice(1, -1);
  if (first === last) {
    return palindrome(rest);
  }
  return false;
};

/**
 * // 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
//simpler case: y only goes into x once, so return x - y
//simplest case: x = y, return 0
//recursive case: y goes into x more than once, return modulo()
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
//

var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === y) {
    return 0;
  }
  if (x < 0) {
    return -modulo(-x, y);
  }
  if (y < 0) {
    return modulo(x, -y);
  }
  if (y > x) {
    return x;
  }
  var diff = x - y;
  if (diff < y) {
    return diff;
  }
  return modulo(diff, y);
};

/**
 *
 * // 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
// simpler case: x === 2 or y === 2, then return x + x or y
// simplest case: a y === 1, return x or x === 1, then return y
// recursive case: number multiplied by multiplier greater than 2, then number + multiply()
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (y === 1) {
    return x;
  }
  if (y === -1) {
    return -x;
  }
  if (y < 0) {
    return -x + multiply(x, y + 1);
  }
  return x + multiply(x, y - 1);
};

/**
 * 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings). integer division?
 * @param {number} x
 * @param {number} y
 * @returns {number}
 * // simplest case:
 */

var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x < 0) {
    return -divide(-x, y);
  }
  if (y < 0) {
    return -divide(x, -y);
  }
  if (x < y) {
    return 0;
  }
  if (x === y) {
    return 1;
  }
  var diff = x - y;
  return 1 + divide(diff, y);
};

/**
 * 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// increment x or y (the smallerNumber) until  smallerNumber >= largerNumber
// if smallerNumber >= largerNumber, return larger number
// else  return GCD(smallerNumber++, largerNumber)
//base case 2: if largerNumber % smallerNumber === 0
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */

var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === 0) { // basecase1
    return y;
  }
  if (y === 0) { // basecase2
    return x;
  }
  var remainder = x % y; // gcd(x, y) === gcd(y, remainder)
  return gcd(y, remainder);
};

/**
 * 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
// simpler case: str1 and str2 have length 1, compare character
// simplest case: str1 and str2 are both empty strings, return true
// needs to be more recursive:
// recursive case:
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */

var compareStr = function(str1, str2) {
  if (str1 === '' && str2 === '') {
    return true;
  }
  if (str1[0] === str2[0]) {
    var rest1 = str1.slice(1);
    var rest2 = str2.slice(1);
    return true && compareStr(rest1, rest2);
  }
  return false;
};

/**
 * 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
 * @param {string} str
 * @returns {Array<string>}
 // get first element of str, this push to array, use array.concat to join arrays
 // recursive case str.length > 0, createArray(str.slice(1))
 // base case
 // string.length === 0, return []
 */

var createArray = function(str) {
  if (str.length === 0) { // basecase
    return [];
  }
  var letters = [];
  var firstLetter = str[0];
  letters.push(firstLetter);
  var rest = str.slice(1);
  return letters.concat(createArray(rest));
};

/**
 * 17. Reverse the order of an array
 * @param {Array<*>} array
 * @returns {Array<*>}
 * if array.length === [], return [] base
 * if array.length === 1, return [array[0]]
 * else: return lastElement + reverseArr(array.slice(1, -1)) + firstElement
 */

var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    return array;
  }
  var first = array.slice(0, 1);
  var last = array.slice(-1);
  var rest = array.slice(1, -1);
  return last.concat(reverseArr(rest), first);
};

/**
 * 18. Create a new array with a given value and length.
 * @param {*} value
 * @param {number} length
 * @returns {Array<*>}
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
// basecase1; length === 0, return []
// basease2; length === 1, return array with value its only element
// recursive case: concat [value] array recursively until an array of size length is constructed
 */

var buildList = function(value, length) {
  var values = [];
  if (length === 0) {
    return values;
  }
  values.push(value);
  return values.concat(buildList(value, length - 1));
};

/**
// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
 * @param {number} n
 * @returns {Array<number|string>}
 * basecase:  if n === 0, return empty array
 * recursive case: n > 0, check if n is multiple of 3 or 5 or both and add appropriate element empty array, then concat array to fizzbuzz(n - 1)
 */

var fizzBuzz = function(n) {
  var numbers = [];
  if (n === 0) {
    return numbers;
  }
  if ((n % 3 === 0) && (n % 5 === 0)) {
    numbers.push('FizzBuzz');
  } else if (n % 3 === 0) {
    numbers.push('Fizz');
  } else if (n % 5 === 0) {
    numbers.push('Buzz');
  } else {
    numbers.push(n.toString());
  }
  return fizzBuzz(n - 1).concat(numbers);
};

/**
 * 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
 * @param {Array<number|string>} array
 * @param {number|string} value
 * @returns {number}
 * basecase: input empty array or value that is not in array, return 0
 * simpler case: input is an array of length 1 with value as the only element, return 1
 * recurse case: number of occurance of value in array.slice(0,1) + countOccurrence(array.slice(1), value)
 */

var countOccurrence = function(array, value) {
  var first = array[0];
  var rest = array.slice(1);
  if (array.length === 0) {
    return 0;
  }
  if (first === value) {
    return 1 + countOccurrence(rest, value);
  }
  return countOccurrence(rest, value);
};

/**
 * 21. Write a recursive version of map.
 * @param {Array<*>} array
 * @param {function} callback
 * @return {Array<*>}
 * simplest case: empty array, return empty array  of array only contains 1 element, callback on that element and then push it into a new array
 * recursively call map until you get an empty array
 * rMap([1,2,3], timesTwo); // [2,4,6]
 */

var rMap = function(array, callback) {
  var first = array[0];
  var mapped = [];
  if (array.length === 0) {
    return mapped;
  }
  var cbValue = callback(first);
  var rest = array.slice(1);
  mapped.push(cbValue);
  return mapped.concat(rMap(rest, callback));
};

/**
 * 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
 * @param {object} obj 
 * @param {string} key 
 * @returns {number}
 * simplest: obj is an empty object, return 0
 * simpler: every value in obj is type string
 * recursive: obj contains a value of type object, then call countKeysInObj where obj = value that is an object and key
 */

var countKeysInObj = function(obj, key) {
  var keys = Object.keys(obj);
  var count = 0;
  for (var i = 0; i < keys.length; i++) { // anything that gets here is an object with at least 1 key-value pair
    if (keys[i] === key) {
      count += 1;
    }
    var value = obj[keys[i]];
    if (typeof value === 'object') {
      count += countKeysInObj(value, key); //
    }
  }
  return count;
};

/**
 * 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
 * @param {object} obj 
 * @param {number} value 
 * @returns {number}
 * 
 */

var countValuesInObj = function(obj, value) {
  var count = 0;
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var val = obj[keys[i]];
    if (val === value) {
      count += 1;
    }
    if (typeof val === 'object') {
      count += countValuesInObj(val, value);
    }
  }
  return count;
};

/**
 * 24. Find all keys in an object (an1d nested objects) by a provided name and rename
 * them to a provided new name while preserving the value stored at that key.
 * @param {object} obj 
 * @param {string} oldKey 
 * @param {string} newKey 
 * @returns {object}
 * do this on object with no nested objects (cycle through keys to check and replace)
 * extend function so that it can handle nested objects
 * exit condition: obj has no values that are type property
 *  {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'};
 * */

var replaceKeysInObj = function(obj, oldKey, newKey) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = obj[key];
    if (typeof value === 'object') {
      replaceKeysInObj(value, oldKey, newKey);
    }
    if (key === oldKey) {
      delete obj[key];
      obj[newKey] = value;
    }
  }
  return obj;
};

/**
 * 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
 * @param {number} n 
 * @returns {Array<number>}
 * basecase: n = 0
 * fibn = fib(n-1) + fib(n-2)
 * fib1 => 1, fib2 => 1, fib3 => 2
 *  */

var fibonacci = function(n) {
  var fibs = [];
  if (n === 0) {
    return fibs.push(0);
  }
  if (n === 1) {
    return fibs.push(1);
  }
  var minus1 = n - 1;
  var minus2 = n - 2;
  fibs.push(fibonacci(minus1 + minus2));
  return fibs;
};

/**
 * 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
 * @param {number} n 
 * @returns {number}
 */

var nthFibo = function(n) {


};

/**
 * 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
 * @param {Array<string>} array
 * @returns {Array<string>}
 * basecase: empty array, return empty arraay
 * simplecase: one string, return string.toUpperCase()
 * recursive: array.length>1, iteratate through array recursively
 */

var capitalizeWords = function(array) {
  var allCaps = [];
  var current = array[0]; // number
  var rest = array.slice(1); // array
  if (array.length === 0) {
    return allCaps;
  }
  current = current.toUpperCase();
  allCaps.push(current);
  var result = allCaps.concat(capitalizeWords(rest));
  return result;
};

/**
 * 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
 * @param {Array<string>} array 
 * @returns {Array<string>}
 */

var capitalizeFirst = function(array) {
  var capitalized = [];
  if (array.length === 0) {
    return capitalized;
  }
  var current = array[0]; // string
  var restArray = array.slice(1); // array
  var firstLetter = current[0]; // single letter
  var restLetters = current.slice(1);
  firstLetter = firstLetter.toUpperCase();
  current = firstLetter + restLetters;
  capitalized.push(current);
  var result = capitalized.concat(capitalizeFirst(restArray));
  return result;
};


/**
 * 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
 * @param {*} obj
 * @returns {number}
 * basecase: empty object, return 0
 * simpler: no nested objects, return sum of all even values by iterating through
 * object and checking keys
 * recursive: some values are nested structures, iterate through outer object, if
 *  a key has a value of type object, call recursively
 */

var nestedEvenSum = function(obj) {
  var sum = 0;
  var keys = Object.keys(obj);
  if (keys.length === 0) {
    return sum;
  }
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = obj[key];
    if (typeof value === 'object') {
      sum += nestedEvenSum(value);
    }
    if (value % 2 === 0) {
      sum += value;
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
