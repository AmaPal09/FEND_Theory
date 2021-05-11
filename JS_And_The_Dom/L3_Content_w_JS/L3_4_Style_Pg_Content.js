// L3 4 Style Page Content
/********************************************************************/
// Modifying an Element's Style Attribute
//--------------------------------------------------------------------
const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'red';
// modify one CSS style at a time.
mainHeading.style.backgroundColor = 'orange';
mainHeading.style.fontSize = '3.5em';


/********************************************************************/
// Adding Multiple Styles At Once
//--------------------------------------------------------------------
const otherHeading = document.querySelector('h2');

otherHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';

// Notice that when using the .style.cssText property, you write the
	// CSS styles just as you would in a stylesheet; so you write
	// font-size rather than fontSize

// <p id="quizzing-quizzes" style="color: orange;">Howdy</p>
document.querySelector('#quizzing-quizzes').style.cssText = 'width: 30px; text-decoration: underline;';
//Result
// <p id="quizzing-quizzes" style="width: 30px; text-decoration: underline;">Howdy</p>

/********************************************************************/
// Setting An Element's Attributes
//--------------------------------------------------------------------
const subHeading = document.querySelector('h3');

subHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');

// .setAttribute() Is Not Just For Styling
// 	The setAttribute() method is not just for styling page elements.
// 	this method can set any attribute for an element.
// 	It can give an element an ID.

//add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');

// use the newly added ID to access that element
document.querySelector('#heading-sibling').style.backgroundColor = 'red';

//Same can be achieved by
mainHeading.nextElementSibling.style.backgroundColor = 'red';


/********************************************************************/
// Accessing an Element's Classes
//--------------------------------------------------------------------
// .className property. This property returns a string of all of
	// the element's classes.

// <h1 id="my-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>
const myHeading = document.querySelector('#my-heading');

// store the list of classes in a variable
const listOfClasses = myHeading.className;

console.log(listOfClasses);
// logs out the string "ank-student jpk-modal"

// The .className property returns a space-separated string of
	// the classes.
const arrayOfClasses = listOfClasses.split(' ');

console.log(arrayOfClasses);
// logs out the array of strings ["ank-student", "jpk-modal"]

// As it is array of classes, it is possible to perform any
	// data-intensive calculations:
		// use a for loop to loop through the list of class names
		// use .push() to add an item to the list
		// use .pop() to remove an item from the list
myHeading.className = "im-the-new-class";
// The above code erases any classes that were originally in the
	// element's class attribute and replaces it with the single
	// class im-the-new-class.


/********************************************************************/
// The .classList Property
//--------------------------------------------------------------------
// The .classList property is newer than the .className property, but
	// is much nicer

// <h2 id="my-second-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h2>
const mySecHeading = document.querySelector("my-second-heading");
const listOfClasses2 = mySecHeading.classList;
// store the list of classes in a variable

console.log(listOfClasses);
// logs out ["ank-student", "jpk-modal"]
// This is a DOMTokenList

// The .classList property has a number of properties of its own. Some
	// of the most popularly used ones are:
		// .add() - to add a class to the list
		// .remove() - to remove a class from the list
		// .toggle() - to add the class if it doesn't exists or remove it
			// from the list if it does already exist
		// .contains() - returns a boolean based on if the class exists in the list or not

const headingX = document.querySelector("#X");
headingX.classList
// Result
// DOMTokenList ["text-center", value: "text-center"]
headingX.classList.contains("text-center");// true
headingX.classList.contains("ice-creame"); //false
headingX.classList.toggle("ice-creame");// true
headingX.classList
// DOMTokenList(2) ["text-center", "ice-creame", value: "text-center ice-creame"]
//Toggle will add a class if it is not present in the class list and
// then toggle it

headingX.classList.remove("ice-creame");
// undefined
headingX.classList
// DOMTokenList ["text-center", value: "text-center"]
