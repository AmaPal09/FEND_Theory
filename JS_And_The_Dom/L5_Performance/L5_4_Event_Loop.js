// L5_4_CEvent_Loop
/********************************************************************/
// Code Synchronicity
//--------------------------------------------------------------------
Code Synchronicity

	JS as a languages excuted code in
		run-to-completion
		single-threaded
	fashiion.
	Another term for this is synchronous. By definition, "synchronous"
	means:
		existing or occurring at the same time

	Usually all of the JS code runs in order, at the same time.
	Functions are added to the call stack, and then removed from
	the call stack when they've completed. However, there is some
	code that is not synchronous - meaning that the code is written
	just like any other code, but it is executed at some later point
	in time.
	Example:
		addEventListener()


const links = document.querySelectorAll('input');
const thirdField = links[2];

thirdField.addEventListener('keypress', function handleKeyPresses(event) {
    console.log('a key was pressed');
});

	Most of this code is synchronous. But the event listener's function
	handleKeyPresses is not invoked immediately, it's invoked at
	some later point in time.


/********************************************************************/
// JavaScript Event Loop
//--------------------------------------------------------------------
JavaScript Event Loop
	The simplest explanation of JavaScript's concurrency model uses
	two rules: If some JavaScript is running, let it run until it is
	finished ("run-to-completion"). If no JavaScript is running, run
	any pending event handlers.

	Since most JavaScript is run in response to an event, this is
	known as an event loop: Pick up the next event, run its handler,
	and repeat.

	There are three parts to an event loop:
		the Call Stack
		Web APIs/the browser
		an Event Queue

	The browser runs a block of code synchronously . Whenever it
	encounters an event handler () / set timeout () (in short a Web
	API) it passes it to the browser for future use. The browser will
	hold this function until there's a click event.
	When there is a click event and there is a code already running,
	the event function can't just be added directly to the Call Stack
	because of JavaScript's run-to-completion nature; So the function
	is placed in the Queue. When all of the functions in the Call
	Stack have finished (also known as idle time), then the Queue is
	checked to see if anything is waiting. If something is in the
	Queue, then it's run, creating an entry on the call stack.

	IMPORTANT: The key things to remember here are
		1) current synchronous code runs to completion, and
		2) events are processed when the browser isn't busy.
			Asynchronous code (such as loading an image) runs
			outside of this loop and sends an event when it is done.

	set time out 0:
		It differes the execution of the stack to the end of the
		stack.