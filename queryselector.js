/*
 * I Do:
 *
 * Watch me as I:
 *   - use the querySelector  methods to retrieve elements from the DOM
 */
//let firstElement = document.querySelector('#first')  // ID
//let secondElement = document.querySelector('.second') // class with 1st element you find in class
//let secondElements = document.querySelectorAll('.second') // class with all elements in class
/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first' using querySelector
let firstElement = document.querySelector('#first')
// 2. Get the elements with a class of 'second' with querySelector
let secondElement = document.querySelector('.second')
// 3. Try the above prompt with querySelectorAll. What's the difference between
//    what these two methods return?
let secondElements = document.querySelectorAll('.second')
// 4. Get the span element using querySelector
let spanElement = document.querySelector('span')
// 5. Get multiple span elements using querySelectorAll
let spanElements = document.querySelectorAll('span')
// 6. Select only "a" tags *directly inside* of a div (no grandchildren).
let aTags = document.querySelector('div > a')
// 7. Select all elements that contain a "data-target" attribute
let dataTargetElements = document.querySelectorAll('[data-target]')
// 8. Select all elements where the data-target attribute equals "#false"
let falseDataTargetElements = document.querySelectorAll('[data-target="#false"]')