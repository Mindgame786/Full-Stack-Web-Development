//-------------------------Functions-Js-----------------------------------------------------

// it is  a   block  of code to perform a specific task.
// once a  function is  defined it can be called (or invoked)  multiple times.
// we always use parentheses() with function.



// Function Definition:

//   A function is defined using the function keyword, followed by a name, a list  of parameters (enclosed in parentheses), and a block of code {enclosed in curly brakets}

// Function Call:

//  To  execute the code within a function, you call it by  its name followed by parentheses.

// Note:   Values of  parameter is called Arguements.Here value is name is "umar",so its a argument.

// (a) username is  a parameter  |   greet is a function name,
// (b) Function Definition maybe with or without parameters.


// Example:-

function greet(username) {
  console.log("Hello " + username + "!");
  console.log("Hi " + username + "!");
  console.log("Hey " + username + "!");
}
greet("UMARJUTT");
// greet("UMARJUTT");



function addNum(a, b) {
  console.log("Sum of No :", a + b);
}

addNum(22, 43);


// Return Keyword:

// The return keyword in  JavaScript is used within a function to stop the function's execution and send a value back to the place where the function was called.

function addNum(a, b) {
  return a + b;
  // console.log("Funcitons is not Print because return not execute after return ok")
}

let sum = addNum(34, 39);
console.log("Sum of Value :", sum);
// console.log("Sum of Value :", addNum(22, 43));

