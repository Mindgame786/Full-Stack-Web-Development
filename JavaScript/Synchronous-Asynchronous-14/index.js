//--------------Synchronous_Asynchronous_Programming_in_JavaScript---------------------------

// In  JavaScript, synchronous and asynchronous programming are two distinct ways of code execution ways of code execution.

//----------------------------------Synchronous----------------------------------------------

// Synchronous programming means that code is executed one after another, in a sequence.A task must complete before the next one starts.

console.log("Start of Program");
console.log("Processing...!");
console.log("End of Program");

//-------------------------------------------------------------------------------------------
//                            SetTimeout()
//-------------------------------------------------------------------------------------------

// The setTimeout function is a built-in method in JavaScript used to Schedule the execution of  a  function after a  specified delay (in milliseconds).                                  It allows Asynchronous behavior by deferring the execution of code without blocking the rest of the program.

// setTimeout(callback,delay);

//-----------------------------Method No 1

function goldRate() {
  console.log("Gold Rate is : $800")
}
setTimeout(goldRate, 3000);   // three Seconds delay After Excute the function.

// goldRate();

//--------------------------------- Method No 2

setTimeout(() => {
  console.log("Gold Rate is : $900")
}, 6000);



//---------------------------------------------------------------------------------------------                                 Asynchronous                                              ---------------------------------------------------------------------------------------------

//        Asynchronous Programming allows tasks to be executed without waiting for others to finish.it enables JavaScript to handle long-running tasks without blocking the execution of the program.


console.log("Oil Rate : $80");
console.log("Silver Rate : $399");


setTimeout(() => {
  console.log("Gold Rate is : $1200");
}, 6000);

console.log("USD 1$ = PKR 280/-");
console.log("UK 1GBP  = PKR 350/-");


//---------------------------------------------------------------------------------------------                                                                                             ---------------------------------------------------------------------------------------------




