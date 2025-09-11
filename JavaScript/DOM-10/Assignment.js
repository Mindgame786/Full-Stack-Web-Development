let newText = prompt(" Enter New Text for Heading");
let h1 = document.querySelector("h1");
// h1.innerText = newText;    // OR ADD TEXT in newText no remove previous text down method.
h1.innerText = h1.innerText + newText;


//------------------------------------------------------------------------------------------

let boxes1 = document.querySelectorAll(".boxes")
// boxes1[0].innerText = "My Life";
let no = 1;
for (varb of boxes1) {
  varb.innerText = `Box No.  ${no}`;
  no++;
}



