// L4_3_Event_Phases
/********************************************************************/
//
//--------------------------------------------------------------------
document.addEventListener('click', function () {
   console.log('The document was clicked');
});

document.body.addEventListener('click', function () {
    console.log('The document body was clicked');
});

//Sequence in which they will appear on the page on clicking:
//The document body was clicked
//The document was clicked


/********************************************************************/
// Event Phases
//--------------------------------------------------------------------
// Event Phases
// 	There are three different phases during the lifecycle of an event. They are:
// 		the capturing phase
// 		the at target phase
// 		and the bubbling phase
// 	And they actually follow the order above; first, it's capturing,
// 	then at target, and then the bubbling phase.

// 	Most event handlers run during the at target phase, such as when
// 	you attach a click event handler to the button. The event arrives
// 	at the button (its target), and there's only a handler for it
// 	right there, so the event handler gets run.

// 	By default, if you click on a child item and a handler doesn't
// 	intercept the click, the event will "bubble" upward to the parent,
// 	and keep bubbling until something handles it or it hits the
// 	document.

// 	Capturing, on the other hand, lets the parent intercept an event
// 	before it reaches a child.

// 	the .addEventListener() method is called with two arguments, the:
// 		event type
// 		and the listener
// 	There's actually a third argument to the .addEventListener()
// 	method; the useCapture argument.
// 	.addEventListener() is called with only two arguments,
// 	the method defaults to using the bubbling phase

const items = document.querySelectorAll('.quizzing-quizzes');
const el = items[1];

el.addEventListener('click', function () {
    console.log('You clicked on the 2nd quizzing-quizzes item!');
}, false);
//Code set for bubbling phase.

/********************************************************************/
// The Event Object
//--------------------------------------------------------------------
// The Event Object
// 	When an event occurs, the browser includes an event object.
// 	This is just a regular JavaScript object that includes a ton of
// 	information about the event itself. According to MDN, the
// 	.addEventListener()'s listener function receives:
// 		a notification (an object that implements the Event
// 			interface) when an event of the specified type occurs

// document.addEventListener('click', function (event) {  // ← the `event` parameter is new!
//    console.log('The document was clicked');
// });

const items2 = document.querySelectorAll('.quizzing-quizzes');
const el2 = items2[1];

el2.addEventListener('keypress', function (event) {
    console.log('You clicked on the 2nd quizzing-quizzes item!');
});


/********************************************************************/
// The Default Action
//--------------------------------------------------------------------
// The Default Action
// 	the event object stores a lot of information, and we can use
// 		this data to do all sorts of things. However, one incredibly
// 		common reason that professionals use the event object for, is to
// 		prevent the default action from happening.
// 	the event object has a .preventDefault() method on it that a
// 		handler can call to prevent the default action from occurring!
const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});