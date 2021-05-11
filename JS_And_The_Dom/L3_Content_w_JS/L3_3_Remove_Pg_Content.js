// 3 Remove Page Content
/********************************************************************/
// .removeChild()
//--------------------------------------------------------------------
// removes a child element.

// .removeChild() method requires:
// 	a parent element
// 	the child element that will be removed
// <parent-element>.removeChild(<child-to-remove>);

const cardContainer = document.querySelector(".hero__module");
const card1 = cardContainer.firstElementChild;

cardContainer.removeChild(card1);

// Imp
// .removeChild() method.
// 	require access to parent to function


/********************************************************************/
// .firstChild
//--------------------------------------------------------------------
// .firstChild property can be called on a parent element to
// 	access its element in it

const card2 = cardContainer.firstChild;
// .firstChild might return whitespace (if there is any) to preserve
// 	the formatting of the underlying HTML source code.

/********************************************************************/
// .firstElementChild
//--------------------------------------------------------------------
// .firstElementChild property can be called on a parent element to
// 	access its first element

const card2 = cardContainer.firstElementChild;

/********************************************************************/
// .parentElement
//--------------------------------------------------------------------
// every element also has a parentElement property that refers to its
// 	parent
const mainHeading = document.querySelector('h1');

mainHeading.parentElement.removeChild(mainHeading);


/********************************************************************/
// .remove()
//--------------------------------------------------------------------
// method that is directly on the element to delete.
const mainHeading = document.querySelector('h1');

mainHeading.remove();