console.dir(document.body.childNodes);
console.dir(document.body.childNodes[0]);
console.dir(document.body.childNodes[1]);

//-------------------------------------------------------------------------------------------
document.body.style.background = "#ccc";
document.body.childNodes[1].innerText = "Query Selector";
document.body.childNodes[3].childNodes[3].innerText = "Virual University of Pakistan Season 2025";
document.body.childNodes[3].childNodes[7].innerText = "Download";

// This is Heading outside the div thus so not use [3] so only use [5] direct target p [5].

document.body.childNodes[5].innerText = "@ MR_OFFIAIAL_804";


//-------------------------------------------------------------------------------------------


//----------------------------Dom-Attripulation------------------------------------------

// We can change HTML elements attributes using JS

// in DOM                                                                  GetAttribute:
//  used to get value of selected HTML node.

let heading = document.querySelector("h1");
console.log(heading.getAttribute("id"));


let paragraph = document.querySelector("p");
console.log(paragraph.getAttribute("class"));


let button = document.querySelector("button");
console.log(button.getAttribute("id"));



//-------------------------------------------------------------------------------------------

// SetAttribute:
// Used to set attribute new value of selected node.

let button1 = document.querySelector("button");
// console.log(button1.getAttribute("id"));
button1.setAttribute("id", "mybtn");
console.log(button1.getAttribute("id"));


//----------------------------Dom_Style------------------------------------------------------
// We can change styling of our elements using JS ,

let div = document.querySelector("div");
div.style.backgroundColor = "pink";









