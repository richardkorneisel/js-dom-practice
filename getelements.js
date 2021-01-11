/*
 * I Do:
 *
 * Watch me as I:
 *   - use the getElement(s) methods to retrieve elements from the DOM
 */

/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first'
let firstElement = document.getElementById('first')
// 2. Now delete that first element (in the html file), and re-run your code.
//    What changed?
//  This is misleading element with same id name
// 3. Get the elements with a class of 'second' with getElementsByClassName:
let secondClass = document.getElementsByClassName('second')
// 4. Delete one of the elements with a class of 'second' and refresh the page.
//    Do you get a similar result?
// One less element shown.  Array of 2 vs 3.
// 5. Get the span element using getElementsByTagname:
let thirdElement = document.getElementsByTagName('span')
// 6. Add a span anywhere, and re-run the last piece of code. What's different?
