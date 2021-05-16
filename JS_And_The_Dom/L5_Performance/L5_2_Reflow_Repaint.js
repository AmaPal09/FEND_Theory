// L5_2_Reflow_And_Repaint
/********************************************************************/
// Reflow and Repaint
//--------------------------------------------------------------------
Reflow
	Reflow is the process of the browser laying out the page.
	It happens when the DOM is first displayed (generally after the
	DOM and CSS have been loaded), and happens again every time
	something could change the layout. This is a fairly expensive
	(slow) process.

Repaint
	Repaint happens after reflow as the browser draws the new layout
	to the screen. This is fairly quick, but it still should be done
	a limited number of times.

	When a CSS class is added to an element, the browser often
	recalculates the layout of the entire page—that's one reflow and
	one repaint!

Example

	<div id="comments">
	  <div class="comment"> <!-- some content --> </div>
	  <div class="comment"> <!-- some content --> </div>
	  <div class="comment"> <!-- some content --> </div>
	</div>

	Suppose 2 of these comment classes are to be deleted.
	Simple call to .removeChild() for each of the two comments that
	need to be removed, would be one reflow and one repaint for each
	change (so a total of 2 reflows and 2 repaints).

	Other solution would be to rebuild the whole thing in a
	DocumentFragment and replace #comments -- that's the time to
	rebuild (possibly involving reading files or data), plus at least
	one reflow and one repaint.

	Efficient solution would be
	hide #comments, delete the spam, and show it again -- that's
	surprisingly fast, to the cost of one reflow and two repaints
	(and little else). It's fast because hiding doesn't change the
	layout, it just erases that section of the screen (1 repaint).
	When you make the changed section visible again, that's a reflow
	and a repaint.

	// hide #comments
document.getElementByClass("comments").style.display = "none";

// delete spam comments

// show #comments
document.getElementByClass("comments").style.display = "block";