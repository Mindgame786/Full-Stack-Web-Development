console.dir(window.document);
console.dir(document.body);
console.dir(document.body);
//------------------------------------------------------------------------------------------

//------------------------------------Dom_Manipulation---------------------------------------

// DOM Manipulation means to make changes in HTML using DOM.
// First of all you need to identify which HTML element you want to modify|change.

//-------------------There are Two Method To Get or Set For Modify in Html-------------------

//  (1) Get Element: TO Access HTML Element|Node 
//                             [id(#) , class(.) , Tag (h1)]
//       document.getElementById("Id")
//       document.getElementById(".")
//       document.getElementById("h1")

//                        (2) Set Element: TO Change HTML Element|Node.



//-------------------------------------------------------------------------------------------
document.body.style.background = "#ccc";
document.body.childNodes[1].innerText = "Query Selector";
document.body.childNodes[3].childNodes[3].innerText = "Virual University of Pakistan Season 2025";
document.body.childNodes[3].childNodes[7].innerText = "Download";

// This is Heading outside the div thus so not use [3] so only use [5] direct target p [5].

document.body.childNodes[5].innerText = "@ MR_OFFIAIAL_804";


//-------------------------------------------------------------------------------------------

// --------------------------QuerySelector-------------------------------------------

//  QuerySelector with get by most common use in  modern web get first Element which Found.




let firstElement1 = document.querySelector(".para1");
console.log(firstElement1);
console.log(firstElement1.tagName);



let firstElement2 = document.querySelector("#btn");
console.log(firstElement2);



let firstElement3 = document.querySelector("h1");
console.log(firstElement3);
console.log(firstElement3.innerText);


let firstElement4 = document.querySelector("div");
console.log(firstElement4);
console.log(firstElement4.innerText);


let firstElement5 = document.querySelector("div");
// console.log(firstElement5);
console.log(firstElement5.innerHTML);

//-----------------------------------------------------------------------------------


let firstElement6 = document.querySelector("div");
// console.log(firstElement6);
console.log(firstElement6.children);



let firstElement7 = document.querySelector("button");
// console.log(firstElement7);
console.log(firstElement7.textContent);


//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------




//-----------------------If in firstElementChild in not found Element so firstChild so only text first child not show with tag:

let firstElement8 = document.querySelector("div");
// console.log(firstElement8);
console.log(firstElement8.firstElementChild);
console.log(firstElement8.firstChild);


let firstElement9 = document.querySelector("div");
// console.log(firstElement9);
console.log(firstElement9.lastElementChild);
console.log(firstElement9.lastChild);



let firstElement10 = document.querySelectorAll("h1");
console.log(firstElement10);
// console.log(firstElement4);




//----------------------------------------------------------------------------------------

