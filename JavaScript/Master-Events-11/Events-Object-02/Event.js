//---------------------------Priority in Event Handling--------------------------------------
// (1) Inline Event Handling 
// (2) (DOM)JS With Event Handling



//-------------------------------------------------------------------------------------------
//                 Event-Object
//-------------------------------------------------------------------------------------------

// It is a special object that is created by the browser automatically, that holds details about specific event.

//    Type of event                 :  (e.g; "click" , "keydown")
//    Target                      :  (Which element the event happened on)
// Mouse Position               :   ( position on screen)


// Example Here:


let button = document.querySelector("button");

button.onclick = (event) => {
  console.log("Event Happened on Clicked by using DOM2 JS");
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.clientX, event.clientY);
}


let div = document.querySelector("div");

div.onmouseover = (event) => {
  console.log(event.target);        // جس element پر event لگا ہے
  console.log(event.type);          // event type e.g. "mouseover"
  console.log(event.clientX, event.clientY); // mouse کی X,Y position
}



