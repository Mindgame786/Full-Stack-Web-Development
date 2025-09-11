let button = document.querySelector("button");
let div = document.querySelector("div");
let Age = document.querySelector("input");
let Reset = document.querySelector("#reset");



button.onclick = () => {

  let agevalue = Age.value;

  if (agevalue === "" || isNaN(agevalue)) {
    alert("Please Enter Your Age !")
    return;
  }


  else {
    let months = Age.value * 12;






    div.style.visibility = "visible";
    Reset.style.visibility = "visible";

    div.innerText = `Age in Months : ${months}`;
  }


  Reset.onclick = () => {
    div.innerText = "";
    div.style.visibility = "hidden";
    Age.value = "";
    Reset.style.visibility = "hidden";

  }
};