let dark = document.querySelector("#dark");
let body = document.querySelector("body");



let color = "dark";

let change = () => {
  if (color === "dark") {
    body.style.backgroundColor = "white";
    color = "light";
    dark.innerText = "Dark";
  } else {
    body.style.backgroundColor = "black";
    color = "dark";
    dark.innerText = "Light";

  }
}

dark.addEventListener("click", change);



