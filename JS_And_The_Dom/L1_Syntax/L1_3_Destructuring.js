// L1_Destructuring
/********************************************************************/
// Destructuring from an array
//--------------------------------------------------------------------
// extract data from arrays and objects into distinct variables using
// destructuring.
const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);
//10 25 -34

const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const carat = gemstone.carat;

console.log(type, color, carat);
//quartz rose 21.29


/********************************************************************/
// Destructuring
//--------------------------------------------------------------------
// Destructuring borrows inspiration from languages like Perl and
// Python by allowing you to specify the elements you want to extract
// from an array or object on the left side of an assignment.

// Destructuring values from an array
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);
//10 25 -34

//TIP: You can also ignore values when destructuring arrays.
// For example, const [x, , z] = point; ignores the y coordinate and
// discards it.
let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third] = positions;
//second has value Jarrod

// Destructuring values from an object
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const {type, color, carat} = gemstone;

console.log(type, color, carat);
//quartz rose 21.29

// the curly braces { } represent the object being destructured and
// type, color, and carat represent the variables where you want to
// store the properties from the object.

// TIP: You can also specify the values you want to select when
// destructuring an object. For example, let {color} = gemstone; will
// only select the color property from the gemstone object.


const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius, getArea, getCircumference} = circle;

getArea()
//Returns NaN


/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

// const one = things;
// const two = '';
// const three = '';

const [one, , , two, , , , three,] = things
const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);
// Returns
// List of Colors
// 1. red
// 2. green
// 3. blue