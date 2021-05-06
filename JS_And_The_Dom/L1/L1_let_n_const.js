// L1 Theory
/********************************************************************/
//Hoisting and Var
//--------------------------------------------------------------------
// Example of Js Hoisting with Var
function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
getClothing(false) //undefined


/********************************************************************/
// let & const
// -------------------------------------------------------------------
// Variables declared with let and const eliminate this specific issue
// of hoisting because they’re scoped to the block, not to the function.
// If a variable is declared using let or const inside a block of code
// (denoted by curly braces { }), then the variable is stuck in what is
// known as the temporal dead zone until the variable’s declaration is
// processed. This behavior prevents variables from being accessed only
// until after they’ve been declared.
function getClothing(isCold) {
  if (isCold) {
    const freezing = 'Grab a jacket!';
  } else {
    const hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
getClothing(false) //ReferenceError: freezing is not defined


/********************************************************************/
// Rules for using let and const
// -------------------------------------------------------------------
// let and const also have some other interesting properties.
// let
// Variables declared with let can be reassigned, but can’t be
// redeclared in the same scope.
// const
// Variables declared with const must be assigned an initial value,
// but can’t be redeclared in the same scope, and can’t be reassigned.

let instructor = 'James';
instructor = 'Richard';
console.log(instructor); //Richard


/********************************************************************/
// Use cases
// -------------------------------------------------------------------
// The general rule of thumb is as follows:
// let
// use let when you plan to reassign new values to a variable, and
// const
// use const when you don’t plan on reassigning new values to a
// variable.


/*
 * Programming Quiz: Using Let and Const (1-1)
 */

const CHARACTER_LIMIT = 255;
const posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();
//Result
//#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!
// Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app
// I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!