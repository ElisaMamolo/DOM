/*
Whats is the dom

The Document Object Model (DOM) is an API (Application Programming Interface)
 for HTML and XML documents. It provides a structured representation of the 
 document (web page) and defines a way that the structure can be accessed 
 from JavaScript. This allows us to change the document structure, style or 
 the content from JavaScript!
*/

//document is a structured group of node and objects with properties and methods


//search element by 
//Remember that id must be a string, and it will return the first occurrence only.
let element = document.getElementById('some-id-goes-here');

//change content of an element
// index.js

console.log('JS connected'); // <== just a quick check up to make sure js doc is connected properly

// TO GET THE ELEMENT FROM DOM YOU CAN USE "getElementById" 
let theCatDiv = document.getElementById('cat');

console.log(theCatDiv); // <== what can you see in browser's console

// TO ADD TEXT TO DOM USE "innerHTML" 
theCatDiv.innerHTML = "I'm a cat";

// set the HTML content of "otherElement" to "I'm a cat"
otherElement.innerHTML = theCatDiv.innerHTML;

//elemt style with attribute and content 
// index.js
// ...

theCatDiv.style.backgroundColor = 'red';
theCatDiv.style.border = '2px green solid';
theCatDiv.style.fontSize = '50px';
theCatDiv.style.marginTop = '30px';
theCatDiv.style.paddingBottom = '30px';



//Accessing Elements by Class Name
//get html collection

let elements = document.getElementsByClassName(names);

let mice = document.getElementsByClassName('mouse');
console.log(mice); // <== HTMLCollection(3) [div.mouse, div.mouse, div.mouse]

//turn html collection into array using the spread operator
let miceArray = [...mice];

console.log(miceArray); // <== [div.mouse, div.mouse, div.mouse]


//accessing by tag name
// index.js
// ...

let divs = document.getElementsByTagName('div');
console.log(divs); // <== [div#cat, div.mouse, div.mouse, div.mouse]

//querySelector Accessing First Found Selector
let theFirstFoundElem = document.querySelector(selectors);
//theFirstFoundElem is an element object
//selectors is a string containing one or more selectors separated by commas.

let firstMouse = document.querySelector('.mouse');
let firstDiv = document.querySelector('div');

console.log(firstMouse); // <== <div class="mouse"></div>
console.log(firstDiv);
// <== <div id="cat" style="background-color: red; border: 2px solid green; font-size: 50px; margin-top: 30px; padding-bottom: 30px;">I'm a cat</div>



//querySelectorAll Accessing an Array of Selectors
// nodelist object
let elementList = document.querySelectorAll(selectors);

//elementsList is a non-live NodeList of element objects.
//selectors is a string containing one or more CSS selectors separated by commas.

let allDivs = document.querySelectorAll('.mouse, #cat');

console.log(allDivs); // <== NodeList(4) [div#cat, div.mouse, div.mouse, div.mouse]



