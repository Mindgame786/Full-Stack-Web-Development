//-----------------------------ClassList---------------------------------------------

//     This method is used to display list of all classes of any element.

let para = document.querySelector("p")

let newpara = document.querySelector("#new");
newpara.classList.add("two");
newpara.classList.replace("two", "one");

// newpara.classList.remove("two");

console.log(newpara.classList);










//----------------------------------------------------------------------------

let paras = document.querySelectorAll("p");
let newText = "";

for (text of paras) {
  newText += text.innerHTML + " ";
}

let newspara = document.createElement("p");
newspara.innerText = newText;
newspara.style.color = "blue";
newspara.style.background = "#ccc";
document.querySelector("body").append(newspara);

