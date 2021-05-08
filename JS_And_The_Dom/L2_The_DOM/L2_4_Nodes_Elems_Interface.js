// L2_4_Nodes_Elems_Interface.js
/********************************************************************/
// Node Interface
//--------------------------------------------------------------------
// Process to build a DOM is:
// 	characters
// 	tags
// 	tokens
// 	nodes
// 	DOM

// Node (with a capital "N"!) is a blueprint that contains information
// 	about all of the properties and methods for real nodes (with a
// 	lowercase "n"!). I
// 		interface = blueprint
// 		properties = data
// 		methods = functionality
// So the Node Interface is a blueprint for all of the properties (data)
// 	and methods (functionality) that every real node has after it's
// 	been created.

/********************************************************************/
// Element Interface
//--------------------------------------------------------------------
// the Element Interface is a blueprint for creating elements

// EventTarget <- Node <-Element

// Element is pointing at Node, this indicates that the Element Interface
// 	inherits all of the Node Interface's properties and methods.
// 	This means that any element (lowercase "e"!) that was created
// 	from the Element Interface is also a descendent from the Node
// 	Interface...which means the element (lowercase "e"!) is also a
// 	node (lowercase "n"!).

// selects the DOM element with an ID of "sidebar"
const sidebarElement = document.getElementById('sidebar');

// searches within the "sidebar" element for any elements with a class of "sub-heading"
const subHeadingList = sidebarElement.getElementsByClassName('sub-heading');