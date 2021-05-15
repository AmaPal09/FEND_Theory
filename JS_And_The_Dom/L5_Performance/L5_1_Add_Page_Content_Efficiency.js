// L5_1_Add_Page_Content_Efficiency
/********************************************************************/
// Testing Code Performance
//--------------------------------------------------------------------
// performance.now()
// 	The standard way to measure how long it takes code to run is by using
// 		performance.now().
// 	performance.now() returns a timestamp that is measured in
// 		milliseconds
// 	performance.now() method starts measuring from the time the page
// 		loaded.

// 	These are the steps to use performance.now() to measure the
// 	speed of your code:
// 		1. use performance.now() to get the initial start time for the code
// 		2. run the code you want to test
// 		3. execute performance.now() to get another time measurement
// 		4. subtract the initial time from the final time



const t20 = performance.now();

for(let i = 1; i <= 200; i++) {
    const newElement2 = document.createElement('p');
    newElement2.textContent = "This is para number " + i;

    document.body.appendChild(newElement2);
}

const t21 = performance.now();

console.log("This code took" + (t21-t20) + "milliseconds");
// VM619:12 This code took0.6150000044726767milliseconds


const t10 = performance.now();

const newDivElement1 = document.createElement('div');

for(let i = 1; i <= 200; i++){
    const newParaElement1 = document.createElement('p');
    newParaElement1.textContent = "This is para number" + i;

    newDivElement1.appendChild(newParaElement1);
}

document.body.appendChild(newDivElement1);

const t11 = performance.now();

console.log("This code took " + (t11-t10) + "milliseconds");
// VM2528:16 This code took 0.4750000007334165milliseconds


// Why is the second peace of code faster than the first peace of code?
// 	The browser is constantly working to make the screen match the
// 	DOM. When we add a new element, the browser has to run through a
// 	reflow calculation (to determine the new screen layout) and then
// 	repaint the screen. This takes time.

/********************************************************************/
// Document Fragment
//--------------------------------------------------------------------
// DocumentFragment
// 	Though the second peace of code above is faster than the first peace,
// 	it still has the unnecessary div element that just holds all the p
// 	elements. DocumentFragment is used to avoid this.

// DocumentFragment definition
// 	DocumentFragment: represents a minimal document object that has
// 	no parent. It is used as a lightweight version of Document that
// 	stores a segment of a document structure comprised of nodes just
// 	like a standard document.
// Plus point of using document fragement:
// 	The key difference is that because the document fragment
// 	isn't part of the active document tree structure, changes made to
// 	the fragment don't affect the document, cause reflow, or incur
// 	any performance impact that can occur when changes are made.

// 	This means, changes made to a DocumentFragment happen off-screen;
// 	there's no reflow and repaint cost

// Syntax
// 	.createDocumentFragment() method to create an empty
// 	DocumentFragment object.

const myDocFrag = document.createDocumentFragment();

const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!