// L4_1_Respond_to_Event
/********************************************************************/
// EventTarget Interface
//--------------------------------------------------------------------
// EventTarget:
// 	is an interface implemented by objects that can receive events
// 	and may have listeners for them and
// 	Element, document, and window are the most common event targets,
// 	but other objects can be event targets too…

// 	It does not inherit any properties or methods from any other
// 	interfaces. However, every other interface inherits from it and
// 	therefore contain its properties and methods. This means that each
// 	of the following is an "event target";
// 		the document object
// 		a paragraph element
// 		a video element
// 		etc.

// 	the document object and any DOM element can be an event target
// 	because both the Element Interface and the Document Interface
// 	inherit from the EventTarget Interface. So any individual element
// 	inherits from the Element Interface, which in turn inherits from
// 	the EventTarget Interface. Likewise, the document object comes
// 	from the Document Interface, which in turn inherits from the
// 	EventTarget Interface.

// 	EventTarget Interface, ydoes not have any properties and only
// 	three methods! These methods are:
// 		.addEventListener()
// 		.removeEventListener()
// 		.dispatchEvent()

/********************************************************************/
// Adding An Event Listener
//--------------------------------------------------------------------
// the .addEventListener() method allows listening for events and
// 	responding to them

// 	pseudo-code to explain how to set an event listener:
// 		<event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);

// 	an event listener needs three things:
// 		an event target - this is called the target
// 		the type of event to listen for - this is called the type
// 		a function to run when the event occurs - this is called the
// 			listener

// 	The <event-target> (i.e. the target) everything on the web is an
// 		event target (e.g. the document object, a <p> element, etc.).
// 	The <event-to-listen-for> (i.e. the type) is the event to respond
// 		to. It could be a click, a double click, the pressing of a
// 		key on the keyboard, the scrolling of the mouse wheel,
// 		the submitting of a form...etc.
// 	he <function-to-run-when-an-event-happens> (i.e. the listener)
// 		is a function to run when the event actually occurs.

const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', function () {
  console.log('The heading was clicked!');
});


const lotsOfElements = document.querySelectorAll('.quizzing-quizzby');
const element = lotsOfElements[2];

element.addEventListener('animationend', function () {
    const mainHeading = document.querySelector('h1');

    mainHeading.style.backgroundColor = 'purple';
});

document.addEventListener('keypress', function () {
    document.body.remove();
});