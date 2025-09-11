//-------------------------------------------------------------------------------------------

//                           (3)      AddEventListener   Most Using In World

//-------------------------------------------------------------------------------------------

// It attaches an event with an element, allowing you to specify the type of event and the function (Event Handler) to be executed When that event occurs.


// Example:


let button = document.querySelector("button");



// button.addEventListener("click", function () {
//   console.log("This is Event-Listener Function!")
// });


button.addEventListener("click", () => {
  console.log("This is Event-Listener Arrow Function!")
});

//-------------------------------------------------------------------------------------------

let fun = () => {
  console.log("This is External Function Message");
}
button.addEventListener("click", fun);

// button.removeEventListener("click", fun);



