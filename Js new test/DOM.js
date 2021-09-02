let body = document.body;//accessing body
//using append you can add strings to the selected element also nodes
body.append("HELLO"," world");
//appendChild append elements(nodes) and you can only append only one at a time

//Creating a new element
let div = document.createElement('div');
let div2 = document.createElement('div');
// We need to now append this new element only creating does nothing

body.append(div)
body.append(div2)
//Now we can add text to our div element for this we have two methods
div.innerText="New world";
div.textContent="Old world";

//inner text only  prints the content that is visible on the screen as it is. Looks at css and then prints
// textcontent shows the document directly from the html along with all the indentations and hidden words

//Modifying the HTML attributes of a text
div2.innerHTML= "<em>Hello World 2</em>"
//Warning : Using innerHTML user can enter malicious code into our page
// SO another alternative way to achieve the same thing and in much more secure way

let emphasis = document.createElement('em');
body.append(emphasis);
emphasis.innerText = "Hello World 3"//same result

//

