// L1_Literal_Shorthand
/********************************************************************/
// Object literal shorthand
//--------------------------------------------------------------------
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);
//Return
// Object {type: "quartz", color: "rose", carat: 21.29}

// It is possibe to remove the duplicate variables names from object
// properties _if_ the properties have the same name as the variables
// being assigned to them.


let type2 = 'quartz';
let color2 = 'rose';
let carat2 = 21.29;

const gemstone2 = {
  type2,
  color2,
  carat2
};

console.log(gemstone2);
//Return
// Object {type2: "quartz", color2: "rose", carat2: 21.29}

//There’s also a shorthand way to add methods to objects.
let type3 = 'quartz';
let color3 = 'rose';
let carat3 = 21.29;

const gemstone3 = {
  type3,
  color3,
  carat3,
  calculateWorth3: function() {
    // will calculate worth of gemstone based on type, color, and carat
  }
};
console.log(gemstone3);
//Returns
//{
//  type3: 'quartz',
//  color3: 'rose',
//  carat3: 21.29,
//  calculateWorth3: [Function: calculateWorth3]
//}

/********************************************************************/
// Shorthand method names
//--------------------------------------------------------------------
//Since you only need to reference the gemstone’s calculateWorth
// property in order to call the function, having the function
// keyword is redundant, so it can be dropped.

let type4 = 'quartz';
let color4 = 'rose';
let carat4 = 21.29;
let gemstone4 = {
  type4,
  color4,
  carat4,
  calculateWorth4() {
  //Will calculate worth of gemstone
	}
};
console.log(gemstone4);
//Returns
// {
//   type4: 'quartz',
//   color4: 'rose',
//   carat4: 21.29,
//   calculateWorth4: [Function: calculateWorth4]
// }