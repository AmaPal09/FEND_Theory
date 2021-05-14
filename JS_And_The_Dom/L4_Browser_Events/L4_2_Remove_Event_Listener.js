// L4_2_Remove_Event_Listener
/********************************************************************/
// Remove Event Listener
//--------------------------------------------------------------------
// .removeEventListener()
// 	To remove an event listener, we use the .removeEventListener()
// 		method.
// 	.removeEventListener() method requires you to pass the same exact
// 		listener function to it as the one you passed to .addEventListener().
// 	pseudo-code for the .removeEventListener():
// 		<event-target>.removeEventListener(<event-to-listen-for>, <function-to-remove>);
// 	So an event listener needs three things:
// 		an event target - this is called the target
// 		the type of event to listen for - this is called the type
// 		the function to remove - this is called the listener
// 	the listener function must be the exact same function as the one
// 		used in the .addEventListener() call...not just an identical
// 		looking function.


function myEventListeningFunction() {
    console.log('howdy');
}
// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);
// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);
	// It works because both .addEventListener() and .removeEventListener:
	// 	have the same target
	// 	have the same type
	// 	and pass the exact same listener


// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});
// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});
	// This code does not successfully remove the event listener. Again, why does this not work?
	// 	both .addEventListener() and .removeEventListener have
	// 		the same target
	// 	both .addEventListener() and .removeEventListener have the
	// 		same type
	// 	.addEventListener() and .removeEventListener have their own
	// 		distinct listener functions...they do not refer to the
	// 		exact same function (this is the reason the event
	// 		listener removal fails!)


myForm.addEventListener('submit', function respondToSubmit(){...});
myForm.removeEventListener('submit', function respondToSubmit(){...});
// the element will still have an event listener
/********************************************************************/
// Are Objects Equal in JS
//--------------------------------------------------------------------
// JavaScript allows type coercion where it will try to convert the
	// 	items being compared into the same type. (e.g. string, number,).
	// 	JavaScript has the double equality (==) operator that will allow
	// 	type coercion. It also has the triple equality (===) symbol that
	// 	will prevent type coercion when comparing.

{ name: 'Richard' } === { name: 'Richard' } //false

var a1 = {
    myFunction: function quiz() { console.log('hi'); }
};
var b1 = {
    myFunction: function quiz() { console.log('hi'); }
};

a1.myFunction === b1.myFunction //false


function quiz() {
	console.log("Hi there!"); }

var a2 = {
    myFunction: quiz
};
var b2 = {
    myFunction: quiz
}

a2.myFunction === b2.myFunction //false

