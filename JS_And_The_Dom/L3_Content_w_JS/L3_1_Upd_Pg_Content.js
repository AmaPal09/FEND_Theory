// L1 Update Existing Page Content
/********************************************************************/
// Update Page Content
//--------------------------------------------------------------------

 // store the first .card element in a variable for easy access:
 const nanodegreeCard = document.querySelector('.card');

/********************************************************************/
// An Element's Inner HTML
//--------------------------------------------------------------------
// every element has an .innerHTML property. This property, as it's
// 	rightly named, represents the markup of the element's content.
// 	Use this property to:
// 	get an element's (and all of its descendants!) HTML content
// 	set an element's HTML content

myElement.innerHTML = 'The <strong>Greatest</strong> Ice Cream Flavors';


/********************************************************************/
//Outer HTML
//--------------------------------------------------------------------
// .outerHTML represents the HTML element itself, as well as its
// 	children.

<h1 id="pick-me">Greetings To <span>All</span>!</h1>

const innerResults = document.querySelector('#pick-me').innerHTML;
console.log(innerResults);
// Returns
// logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector('#pick-me').outerHTML;
console.log(outerResults);
// Returns
// logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"


/********************************************************************/
//An Element's Text Content
//--------------------------------------------------------------------
// .textContent returns justthe text content of the element.
// 	The .textContent property will:
// 		set the text content of an element and all its descendants
// 		return the text content of an element and all its descendants

// Set an elements text content
nanodegreeCard.textContent = "I will be the updated text for the nanodegreeCard element!";

// passing text that contains HTML characters to .textContent will not
// 	display the content as HTML. Instead, it will still display
// 	everything as text - even the HTML characters!


/********************************************************************/
// .innerText property!
//--------------------------------------------------------------------
// .innerText will get the visible text of the element. This is an
// 	important distinction! If CSS is used to hide any text inside
// 	that element, .innerText will not return that text, while
// 	.textContent will return it. And it's not just the hiding/showing
// 	nature of CSS that .innerText adheres to, .innerText will also
// 	honor changes to things like capitalization.