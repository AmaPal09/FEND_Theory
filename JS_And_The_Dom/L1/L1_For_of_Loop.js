// L1_For_of_Loop
/********************************************************************/
// For of loop
//--------------------------------------------------------------------
// The for...of loop is the most recent addition to the family of for loops in JavaScript.

// It combines the strengths of its siblings, the for loop and the
// for...in loop, to loop over any type of data that is iterable
// By default, this includes the data types String, Array, Map, and
// Set—notably absent from this list is the Object data type (i.e. {}).
// Objects are not iterable, by default.


/********************************************************************/
// For loop
//--------------------------------------------------------------------

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
//Returns
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

//biggest downside of a for loop is having to keep track of the
// counter and exit condition.


/********************************************************************/
// For...in loop
//--------------------------------------------------------------------
// The for...in loop improves upon the weaknesses of the for loop by
// eliminating the counting logic and exit condition.
const digits2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits2) {
  console.log(digits2[index]);
}
//Returns
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
//still have to deal with the issue of using an index to access the
// values of the array, t almost makes it more confusing than before.

// the for...in loop can get you into big trouble when you need to
// add an extra method to an array (or another object). Because
// for...in loops loop over all enumerable properties, this means if
// you add any additional properties to the array's prototype, then
// those properties will also appear in the loop.
Array.prototype.decimalfy3 = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits3) {
  console.log(digits3[index]);
}
//Returns
//0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// function() {
//  for (let i = 0; i < this.length; i++) {
//   this[i] = this[i].toFixed(2);
//  }
// }


/********************************************************************/
// forEach
//--------------------------------------------------------------------
// NOTE: The forEach loop is another type of for loop in JavaScript.
// However, forEach() is actually an array method, so it can only be
// used exclusively with arrays. There is also no way to stop or
// break a forEach loop. If you need that type of behavior in your
// loop, you’ll have to use a basic for loop.


/********************************************************************/
// for...of loop
//--------------------------------------------------------------------
// The for...of loop is used to loop over any type of data that is
// iterable.
const digits4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits4) {
  console.log(digit);
}
//Returns
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

//TIP: It’s good practice to use plural names for objects that are
// collections of values. That way, when you loop over the collection,
// you can use the singular version of the name when referencing
// individual values in the collection.
// For example, for (const button of buttons) {...}.

//You can stop or break a for...of loop at anytime.
const digits5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits5) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}
// Returns
// 1
// 3
// 5
// 7
// 9

// And you don’t have to worry about adding new properties to
// objects. The for...of loop will only loop over the values in the
// object.
Array.prototype.decimalfyq6 = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits6) {
  console.log(digit);
}
// Returns
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
//the properties were not printed out to the console,


/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for (let day of days) {
    let dayCap = day.charAt(0).toUpperCase() + day.slice(1)
    console.log(dayCap)
}
//Returns
// Sunday
// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday