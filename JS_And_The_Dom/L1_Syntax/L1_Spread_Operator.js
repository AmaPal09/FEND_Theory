// L1_Spread_Operator
/********************************************************************/
// Spread operator
//--------------------------------------------------------------------

// The spread operator, written with three consecutive dots ( ... ),
// is new in ES6 and gives you the ability to expand, or spread,
// iterable objects into multiple elements.
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
//Returns
//Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
//Returns
// 2 3 5 7 11 13 17 19 23 29

//notice that both the array and set have been expanded into their
// individual elements


/********************************************************************/
//Combining arrays with concat
//--------------------------------------------------------------------
//the spread operator can be useful is when combining arrays.
//combine multiple arrays, prior to the spread operator, you were
// forced to use the Array’s concat() method.

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
console.log(produce);
//Returns
//["apples", "bananas", "pears", "corn", "potatoes", "carrots"]

const produce2 = [fruits,vegetables]
console.log(produce2);
//Returns
//[ [ 'apples', 'bananas', 'pears' ], [ 'corn', 'potatoes', 'carrots' ] ]

/********************************************************************/
//Combining with spread operator
//--------------------------------------------------------------------
/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits3 = ["apples", "bananas", "pears"];
const vegetables3 = ["corn", "potatoes", "carrots"];

const produce3 = [...fruits, ...vegetables];
//Returns
// [ 'apples', 'bananas', 'pears', 'corn', 'potatoes', 'carrots' ]

console.log(produce3);