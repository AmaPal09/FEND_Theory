// L2 Add to Existing Page Content
/********************************************************************/
// Add Page Content
//--------------------------------------------------------------------

/********************************************************************/
// .createElement()
//--------------------------------------------------------------------
// creates and returns a <span> element
document.createElement('span');

// creates and returns an <h3> element
document.createElement('h3');

// document.createElement() to create an element does not actually add
// 	the newly created element anywhere on the page. It just creates
// 	it. It is not added it to the DOM.
// 	Since the element isn't added to the DOM, it doesn't appear in
// 	the page.

/********************************************************************/
// .appendChild()
//--------------------------------------------------------------------
// to use the .appendChild() method, it needs to be called on another
// 	element, not the document object!

// create a brand new <span> element
const newSpan = document.createElement('span');

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);

The .appendChild() method is called on one element, and is passed
	the element to append. The element that is about to be appended
	is added as the last child.

const mainHeading = document.querySelector('#main-heading');
const otherHeading = document.querySelector('#other-heading');
const excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
//Result
// mainHeading has 3 exclamation marks
otherHeading.appendChild(excitedText);
// Result
// otherHeading has 3 exclamation marks

//Imp
//if an element already exists in the DOM and this element is passed
// 	to .appendChild(), the .appendChild() method will move it rather
// 	than duplicating it


/********************************************************************/
// .createTextNode()
//--------------------------------------------------------------------
// creates new text nodes using the .createTextNode() method.
const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);

// Same result can be obtained using .textContent property
const myPara2 = document.createElement('p');

myPara.textContent2 = 'I am the text for the paragraph!';
document.body.appendChild(myPara);

// Imp
// an element's .textContent property is used more often than creating
// 	a text node with the .createTextNode() method

/********************************************************************/
// .insertAdjacentHTML()
//--------------------------------------------------------------------
// Inserting HTML In Other Locations
// By definition, the .appendChild() method will add an element as the
// 	last child of the parent element. It's impossible to put it as
// 	the first child or anywhere else...it has to be the last child.

// The .insertAdjacentHTML() method has to be called with two arguments:
// 	the location of the HTML
// 	the HTML text that is going to be inserted
// The first argument to this method will let us insert the new HTML in one of four different locations
// 	beforebegin – inserts the HTML text as a previous sibling
// 	afterbegin – inserts the HTML text as the first child
// 	beforeend – inserts the HTML text as the last child
// 	afterend – inserts the HTML text as a following sibling

// <!-- beforebegin -->
// <p>
//     <!-- afterbegin -->
//     Existing text/HTML content
//     <!-- beforeend -->
// </p>
// <!-- afterend -->
const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);

// Imp
// the .insertAdjacentHTML() method's second argument has to be text,
// 	you can't pass an element