// L2_5_Query_Selectors.js
/********************************************************************/
// querySelector Method
//--------------------------------------------------------------------
// use the .querySelector() method to select elements just like we do
// 	with CSS. We use the .querySelector() method and pass it a string
// 	that's just like a CSS selector:

// find and return the element with an ID of "header"
document.querySelector('#header');

// find and return the first element with the class "header"
document.querySelector('.header');

// find and return the first <header> element
document.querySelector('header');

// The .querySelector() method only returns one element.
// 	This makes sense if you use it to search for an element by ID.
// 	However, even though .getElementsByClassName() and
// 	.getElementsByTagName() both return a list of multiple elements,
// 	using .querySelector() with a class selector or a tag selector
// 	will still only return the first item it finds.

document.querySelector("#fanciful-butterfly");

document.querySelector("p.callout");

/********************************************************************/
// querySelectorAll Method
//--------------------------------------------------------------------
// The querySelectorAll method gets a list of all elements with a
// 	certain class or all of one type of element.
//  the list returned by .querySelectorAll() is a NodeList

// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

// find and return a list of <header> elements
document.querySelectorAll('header');


// .querySelector() - returns a single element
// .querySelectorAll() - returns a list of elements

// As the list returned by .querySelectorAll() is a NodeList it is
// 	possible to loop over a NodeList with either its .forEach()
// 	method, or the humble for loop
const allHeaders = document.querySelectorAll('header');

for(let i = 0; i < allHeaders.length; i++){
    console.dir(allHeaders[i]);
}
