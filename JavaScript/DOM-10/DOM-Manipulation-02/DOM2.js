console.dir(window.document);
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


//-----------------------------------------------------------------------------------------
console.dir(document.body.childNodes);
console.dir(document.body.childNodes[0]);
console.dir(document.body.childNodes[1]);
console.dir(document.body.childNodes[2]);
console.dir(document.body.childNodes[3]);

//-------------------------------------------------------------------------------------------
document.body.style.background = "black";
document.body.childNodes[1].innerText = "Hello Dear";

document.body.childNodes[3].childNodes[3].innerText = "Virual University of Pakistan Season 2025";


document.body.childNodes[3].childNodes[7].innerText = "Download";
document.body.childNodes[5].innerText = "@ MR_OFFIAIAL_804";


//-------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------
//-------(1):
let myclass = document.getElementsByClassName("para")
console.dir(myclass);

let myid = document.getElementById("btn")
console.dir(myid);

let mytag = document.getElementsByTagName("p")
console.dir(mytag);

//-------------------------------------------------------------------------------------------






