// L5_4_Event_Loop
/********************************************************************/
// Running Code Later
//--------------------------------------------------------------------
// Running Code Later

// 	the setTimeout() function will run code at a point later in time.
// 	The setTimeout() function takes:
// 		a function to run at some later time
// 		the number of milliseconds the code should wait before
// 			running the function


setTimeout(function sayHi() {
    console.log('Howdy');
}, 1000);

	This function is executed as follows:
		Since setTimeout() is an API provided by the browser, the
		call to setTimeout() gives the sayHi() function over to the
		browser which it starts a timer. After the timer is finished,
		the sayHi() function moves to the Queue. If the Call Stack is
		empty, then the sayHi() function is moved to the Call Stack
		and executed.


/********************************************************************/
// setTimeout() with Delay of 0
//--------------------------------------------------------------------
// setTimeout() with Delay of 0
	// An interesting aspect to setTimeout() is that we can pass it a
	// delay of 0 milliseconds.

setTimeout(function sayHi2() {
    console.log('Howdy');
}, 0);  // ← 0 milliseconds!

	// Explanation
	// Since the function as a delay of 0 milliseconds, it still goes
	// through the JavaScript Event Loop. So the function is handed off
	// to the browser where the browser starts a timer for 0
	// milliseconds. Since the timer ends immediately, the sayHi
	// function will move to the Queue, and then to the Call Stack once
	// the Call Stack has finished executing any currently-running tasks.

	// It helps to convert potentially long-running code to one that's
	// broken up to allow for the browser to handle user interactions!

/********************************************************************/
// Break Up Long-Running Code
//--------------------------------------------------------------------
// Break Up Long-Running Code

let count = 1

function generateParagraphs() {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 500; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is paragraph number ' + count;
        count = count + 1;

        fragment.appendChild(newElement);
    }

    document.body.appendChild(fragment);

    if (count < 20000) {
        setTimeout(generateParagraphs, 0);
    }
}

generateParagraphs();

// Explanation
// 	This code starts off by setting a count variable to 1. This will
// 	keep track of the number of paragraphs that have been added.
// 	The generateParagraphs() function will add 500 paragraphs to the
// 	page each time it's invoked. The interesting thing is that
// 	there's a setTimeout() call at the end of the
// 	generateParagraphs() function. If there are less than twenty
// 	thousand elements, then the setTimeout() will be used to call
// 	the generateParagraphs() function.