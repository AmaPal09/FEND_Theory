// L2_2_Select_Pg_Elem_Id.js
/********************************************************************/
// Element Id Selector
//--------------------------------------------------------------------

// Remember the document object is an object, just like a JavaScript object.
// 	This means it has key/value pairs. Some of the values are just
// 	pieces of data, while others are functions (also known as
// 	methods!) that provide some type of functionality.


document.getElementById();
//Results:
//Nothing

document.getElementById('footer');
// passing 'footer', not '#footer'. It already knows that it's
	// searching for an ID
document.getElementById("strawberry-banner");

.getElementById()
// There are a couple of important things to keep in mind about this
// method:
// 	it is called on the document object
// 	it returns a single item

// select the element with the ID "callout"
document.getElementById('callout');