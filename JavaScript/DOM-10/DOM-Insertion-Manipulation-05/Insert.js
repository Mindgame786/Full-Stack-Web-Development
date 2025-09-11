//--------------------------------------DOM-Manipulation-----------------------------
// New HTML element can also be inserted dynamically using JavaScript.

// There are two steps involved, in insertion of new element.
// (1) Create an Element.
// (2) Insert created element at specific point. (append) or (Prepend) Using.....






let h2 = document.createElement("h2");
h2.innerText = "Faisalabad";

document.querySelector("div").append(h2);
document.querySelector("div").prepend(h2);


h2.style.color = "#ff1650ff";
h2.style.backgroundColor = "#16ff9eff";



let para = document.createElement("p");
para.innerText = "Please Select Degree";

document.querySelector("p").prepend(para);
document.querySelector("p").append(para);
para.style.color = "#1683ffff";
para.style.background = "#f3ecc6ff";



let btn11 = document.createElement("button");
btn11.innerText = "Download";
document.querySelector("div").append(btn11);





let newhead = document.createElement("h2");
newhead.innerText = "This Text Out Of Div";
newhead.style.color = "blue";
newhead.style.fontFamily = "Arial";
document.querySelector("div").before(newhead);
document.querySelector("div").after(newhead);


// h2.remove();
// btn11.remove();


//-----------------------------------------------------------------------------------
//                                  appendChild
//-----------------------------------------------------------------------------------

// This method adds a node  to the end of the list of children of a specified parent node.


let newPara = document.createElement("p");
newPara.textContent = "This Text is Created by Text Content ";
newPara.style.color = "#003feeff";
newPara.style.background = "#c1fff2ff";

let body = document.querySelector("body");
body.appendChild(newPara);









let span = document.createElement("span");
span.innerText = "Enter Your Name:  ";
span.style.color = "#0097eeff";
body.appendChild(span);



let text = document.createElement("input");
text.setAttribute("placeholder", "Your Name Here");
text.setAttribute("type", "radio");
text.setAttribute("type", "checkbox");
text.setAttribute("type", "input");
body.appendChild(text);



// body.removeChild(newPara);
// body.removeChild(text);
// body.removeChild(span);


console.log(newPara);
console.log(body);





