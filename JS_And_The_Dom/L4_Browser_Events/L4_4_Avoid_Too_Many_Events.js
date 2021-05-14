// L4_4_Aviod_Too_Many_Events
/********************************************************************/
// Too Many Events
//--------------------------------------------------------------------

const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick(evt) {
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

//Create 200 Events

/********************************************************************/
// Refactoring The Number of Event Listeners
//--------------------------------------------------------------------
// Refactoring The Number of Event Listeners
const myCustomDiv2 = document.createElement('div');

function respondToTheClick2() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement2 = document.createElement('p');
    newElement2.textContent = 'This is paragraph number ' + i;

    newElement2.addEventListener('click', respondToTheClick2);

    myCustomDiv2.appendChild(newElement2);
}

document.body.appendChild(myCustomDiv2);
// This is a great step in the right direction!

// However, we still have two hundred event listeners. They're all
// pointing to the same listener function, but there are still two
// hundred different event listeners.

// One possibility is to move all of the listeners to the <div>


const myCustomDiv3 = document.createElement('div');

function respondToTheClick3() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement3 = document.createElement('p');
    newElement3.textContent = 'This is paragraph number ' + i;

    myCustomDiv3.appendChild(newElement3);
}

myCustomDiv3.addEventListener('click', respondToTheClick3);

document.body.appendChild(myCustomDiv3);

// Now there is only:
// 	a single event listener
// 	a single listener function
// However there is no access to the individual paragraphs
// There's no way for us to target a specific paragraph element.

/********************************************************************/
// Event Delegation
//--------------------------------------------------------------------
// Event Delegation
// 	The event object has a .target property. This property references the
// 		target of the event.

// 	click on a paragraph element. Here's roughly the process that happens:
// 		1.	a paragraph element is clicked
// 		2.	the event goes through the capturing phase
// 		3.	it reaches the target
// 		4.	it switches to the bubbling phase and starts going up the DOM tree
// 		5.	when it hits the <div> element, it runs the listener function
// 		6.	inside the listener function, event.target is the element that was clicked

// 	event.target gives us direct access to the paragraph element that
// 		was clicked. Because we have access to the element directly,
// 		we can access its .textContent, modify its styles, update the
// 		classes it has

const myCustomDiv4 = document.createElement('div');

function respondToClick4(evt) {
	console.log("A para was clicked on: "+evt.target.textContent);
}

for(let i = 1; i <= 200; i++){
	const myNewElement4 = document.createElement('p');
	myNewElement4.textContent = "This is para number " + i;

	myCustomDiv4.appendChild(myNewElement4);
}

myCustomDiv4.addEventListener('click', respondToClick4);

document.body.appendChild(myCustomDiv4);

/********************************************************************/
// Checking the Node Type in Event Delegation
//--------------------------------------------------------------------
// Checking the Node Type in Event Delegation

// 	In the code snippet we used above, we added the event listener directly to the <div> element. The listener function logs a message saying that a paragraph element was clicked (and then the text of the target element). This works perfectly! However, there is nothing to ensure that it was actually a <p> tag that was clicked before running that message. In this snippet, the <p> tags were direct children of the <div> element, but what happens if we had the following HTML:

// 	<article id="content">
// 	  <p>Brownie lollipop <span>carrot cake</span> gummies lemon drops sweet roll dessert tiramisu. Pudding muffin <span>cotton candy</span> croissant fruitcake tootsie roll. Jelly jujubes brownie. Marshmallow jujubes topping sugar plum jelly jujubes chocolate.</p>

// 	  <p>Tart bonbon soufflé gummi bears. Donut marshmallow <span>gingerbread cupcake</span> macaroon jujubes muffin. Soufflé candy caramels tootsie roll powder sweet roll brownie <span>apple pie</span> gummies. Fruitcake danish chocolate tootsie roll macaroon.</p>
// 	</article>

// 	The listener function will still fire when either one of the paragraph elements is clicked, too! In other words, this listener function is not verifying that the target of the event is actually a <span> element. Let's add in this check:

//

document.querySelector('#content').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
        console.log('A span was clicked with text ' + evt.target.textContent);
    }
});

	// every element inherits properties from the Node Interface. One of the
	// 	properties of the Node Interface that is inherited is .nodeName.
	// 	use this property to verify that the target element is
	// 	actually the element we're looking for.
	// 	When a <span> element is clicked, it will have a .nodeName
	// 	property of "SPAN", so the check will pass and the message
	// 	will be logged. However, if a <p> element is clicked, it will
	// 	have a .nodeName property of "P", so the check will fail and
	// 	the message will not be logged.

	// The nodeName's Capitalization
	// 	The .nodeName property will return a capital string, not a
	// 	lowercase one. So when you perform your check make sure to
	// 	either:
	// 		check for capital letters
	// 		convert the .nodeName to lowercase


// check using capital letters
if (evt.target.nodeName === 'SPAN') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

> // convert nodeName to lowercase
if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}