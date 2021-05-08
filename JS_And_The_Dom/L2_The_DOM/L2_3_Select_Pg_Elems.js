// L2_3_Select_Pg_Elems.js
/********************************************************************/
// Accessing Elements By Their Class
//--------------------------------------------------------------------
// .getElementsByClassName()

// document.getElementsByClassName();
// Returns Nothing because we did not tell it the class to search for!

document.getElementsByClassName('brand-color');

/********************************************************************/
// Accessing Elements By Their Tag
//--------------------------------------------------------------------
document.getElementsByTagName('p');

document.getElementsByTagName("article");
document.getElementsByClassName("fancy-footer");

/********************************************************************/
// What's Returned
//--------------------------------------------------------------------
// There are a few important things to keep in mind about these two
// methods:
// 	both methods use the document object
// 	both return multiple items
// 	the list that's returned is not an array

// select all elements that have the class "accent-color"
document.getElementsByClassName('accent-color');
// select all "span" elements
document.getElementsByTagName('span');