// The DOM
/********************************************************************/
// The DON
//--------------------------------------------------------------------

// When a website is requested, the following steps happen:
// 	HTML is received
// 	HTML tags are converted to tokens
// 	Tokens are converted to Nodes
// 	Nodes are converted to the DOM

// The browser receives a stream of HTML. The bytes are run through a
// 	complicated (but fully documented) parsing process that determines
// 	the different characters (e.g. the start tag character <, an
// 	attribute like href, a closing angle bracket like >). After
// 	parsing has occurred, a process called tokenization begins.
// 	Tokenization takes one character at a time and builds up tokens.
// 	The tokens are:
// 		DOCTYPE
// 		start tag
// 		end tag
// 		comment
// 		character
// 		end-of-file
// 	The browser has converted the bytes to tags and has read through
// 	the tags to create a list of tokens.
// 	This list of tokens then goes through the tree construction stage.
// 	The output of this stage is a tree-like structure -
// 	this is the DOM!

// 	a tree structure that captures the content and properties of the
// 	HTML and all the relationships between the nodes

// 	the DOM is the full, parsed representation of the HTML

// The DOM is not:
// 	part of the JavaScript language
// The DOM is:
// 	constructed from the browser
// 	is globally accessible by JavaScript code using the document object

