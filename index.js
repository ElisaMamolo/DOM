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

