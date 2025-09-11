//-----------------------------Events-In-JS--------------------------------------------------

// Events are special actions that happen when you do something on a webpage,like clicking a button or typing in a text box.

// Some types of Events here:
// (1) Mouse Events   (2) Keyboard Events  (3) Form Events  (4) Window Events (5) Prin Events etc search bar on mdn on web check events about details;




//-------------------------------------Event-Handling----------------------------------------

// Following are the most common ways of handling events in JS :

// (1)  Inline Event Handling (2) Event Handling with JavaScript (DOM Property)  (3)Event Handling with addEventListener()


//-------------------------------------------------------------------------------------------                    Event Handling Using DOM                                                  -------------------------------------------------------------------------------------------

// There are three main steps are Involved in event handling using DOM in JS:

// (1) Identify The Element (2) Attach An Event (3) Define The Event Handler Function


// (1) Identify The Element:
//      document.querySelector("Selector");

// (2) Attach An Event:
//      Attach event i.e; (onclick, onmouseover,ondblclick).

// (3) Define  The Event Handler Function:
//     You  can define function for an event using following ways:


//-------------------------------------------------------------------------------------------
//                                     Event With DOM 

let btn = document.querySelector("button");
let a = 1;
btn.onclick = () => {
  console.log("Events With DOM Property");
  console.log(a);
  a++;

}

let red = document.querySelector("#red");
let body = document.querySelector("body");
let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");
let black = document.querySelector("#black");
let white = document.querySelector("#white");
let orange = document.querySelector("#orange");
let blue = document.querySelector("#blue");
let pink = document.querySelector("#pink");





red.onclick = () => {
  body.style.background = "red";

}
yellow.onclick = () => {
  body.style.background = "yellow";

}
green.onclick = () => {
  body.style.background = "green";

}
black.onclick = () => {
  body.style.background = "black";

}
white.onclick = () => {
  body.style.background = "white";

}
orange.onclick = () => {
  body.style.background = "orange";

}
blue.onclick = () => {
  body.style.background = "blue";

}
pink.onclick = () => {
  body.style.background = "pink";

}

