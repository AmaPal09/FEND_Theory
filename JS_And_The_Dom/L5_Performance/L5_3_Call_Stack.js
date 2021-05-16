// L5_3_Class_Stack
/********************************************************************/
// Single Threading
//--------------------------------------------------------------------
// Single Threading
// 	JavaScript is single-threaded. single-threading is: the
// 	processing of one command at a time (source).


function addParagraph1() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';
    document.body.appendChild(para);
}

function appendNewMessage1() {
    const para = document.createElement('p');
    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph1();
appendNewMessage1();

// single-threaded JS runs the code in following order.
// 	1. the addParagraph1() function is declared on line 9
// 	2. the appendNewMessage1() function is declared on line 15
// 	3. addParagraph1() is called on line 21
// 	4. execution moves into the function and executes all three lines
// 		in order
// 	5. now that the function is finished, execution returns to where
// 		it was called
// 	6. the appendNewMessage1() function is called on line 22
// 	7. execution moves into the function and executes all three
// 		lines in order
// 	8. now that the function is finished, execution returns to where
// 		it was called


// Consider Nested Calls
function addParagraph2() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';

    appendNewMessage2();
    document.body.appendChild(para);
}

function appendNewMessage2() {
    const para = document.createElement('p');

    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph2();

// The code now runs in the following order:
// 	1. the addParagraph2() function is declared on line 40
// 	2. the appendNewMessage2() function is declared on line 48
// 	3. addParagraph2() is called on line 55
// 	4. execution moves into the function and executes first two lines
// 	5.  the appendNewMessage2() function is called on line 44
// 	6. execution moves into the function and executes all three
// 		lines in order
// 	7. now that the function is finished, execution returns to where
// 		it was called, i.e. in addParagraph2()
// 	8. the remaining lines of addParagraph2() are executed
// 	9. now that the function is finished, execution returns to where
// 		it was called


/********************************************************************/
// Call Stack
//--------------------------------------------------------------------
Call Stack
	The JavaScript engine keeps a call stack (basically a list) of
	the functions that are running. When a function is invoked, it is
	added to the list. When all of the code inside a function has
	been run, then the function is removed from the call stack.
	A function doesn't have to complete before another function is
	added to the call stack.


