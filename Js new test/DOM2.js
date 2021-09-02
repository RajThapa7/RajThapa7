const body = document.body;
const div = document.querySelector("div");
const span1 = document.querySelector("#hi");
const span2 = document.querySelector("#bye");
//removing a html element
span2.remove();
//but we can still add it by using append later on if we want

//Another method is to remove the element from the parent container i.e div in this case
// div.removeChild(span2);

//Accessing the attributes of an element
console.log(span1.getAttribute("id"));
console.log(span1.getAttribute("title"));
//or another alternative is you calll the method upon the element
console.log(span1.id);
//But not all attributes can be called as a  method

//You can also set the attributes of the element to a new value
span1.setAttribute("title", "Namaskar");
//alternative
span1.title = "salam alekum";
//Removing the attributes

span1.removeAttribute("title");

//MOdifying classes
span1.classList.add("h3"); //adds a new class h3
span1.classList.remove("h2"); //removes the class h2
//Toggle adds the class if the class is  not present and removes the class if it is already present ,if no force is given
// if force is given to the toggle attribute : if true it adds no matter what, and if false it removes
span1.classList.toggle("h7", false); // h7 class is not added even though it is not present as we gave false

//Modifying the style property of any element

span1.style.backgroundColor = "red";
