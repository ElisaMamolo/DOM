//get paragraph by className

let links = document.getElementsByClassName('link');

console.log(links); // <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
// 0: a#google-link.link
// length: 1
// google-link: a#google-link.link
// __proto__: HTMLCollection


//get element by tagname
let divs = document.getElementsByTagName('div');

console.log(divs);



//Operating with attributes

//Getting an element attribute content
let attribute = element.getAttribute(attributeName);

let paragraph = document.getElementById('paragraph');
let paragraphId = paragraph.getAttribute('id');
console.log(paragraphId); // <== paragraph

//Changing the value of an element’s attribute
element.setAttribute(name, value);

//exercise
//Set the href attribute of the a element identified as google-link to http://www.google.com
let link = document.getElementById('google-link');
let attribute = link.setAttribute(href, "http://www.google.com");


//create dom object
let h2Tag = document.createElement('h2');
console.log(h2Tag); // <== <h2></h2>
//Add content into the element and add the element to the DOM
h2Tag.innerHTML = 'Elephant';


// add an element into a parent element:
let parent = document.getElementsByTagName('body')[0];
parent.appendChild(h2Tag);


//create text node
let text = document.createTextNode('This text is created dynamically  ');

parent.appendChild(text);



//EXERCISE Adding an element before another element
/*
The .insertBefore() method allows us to select an existing 
element and insert another before that selected element.
*/

// add h1 tag before our h2 tag
let parent = document.getElementsByTagName('body')[0]; // you don't have to do this again
let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Heading 1 - comes before Heading 2';
parent.insertBefore(h1Tag, h2Tag);


//EXERCISE remove an existing element
/*
To remove an existing element in the DOM, we will need to use the method .removeChild(). The method can be applied
 to any DOM element and it can accept 1 parameter: the selected element child.
*/


//select parent node and call reomvechild method
let theParagraph = document.getElementById('paragraph');
parent.removeChild(theParagraph);



