//-------------------------------------------------------------------------------------------                           CallBack In Js                                  --------------------------------------------------------------------------------------------

//      A  callback  function is   a   function that is  passed as  an  argument  to  another function and is executed within that other function.


function hello(name, callback) {
  console.log("Welcome " + name + " !");
  callback();
}

function bye() {
  console.log(" HAve a nice day... !");

}

hello("UMARJUTT", bye);  //  Important :  not apply specially in callback  bye().


//-------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------                  Callback Hell (OR)  Pyramid of Doom                                        ---------------------------------------------------------------------------------------------

//   Callback Hell is  a  term used to describe a  situation where multiple nested callback functions create deeply indented and difficult-to-read code.



function getResult(rollNo, nextStep) {

  setTimeout(() => {
    console.log(`Result of ${rollNo}`);
    if (nextStep) {
      nextStep();

    }
  }, 2000);
}

getResult(224466, () => {
  console.log("Valid Username.....");
  getResult(224477, () => {
    console.log("Valid Password.....");
    getResult(224488, () => {
      console.log("Successful Login.....");
      getResult(224499);
      console.log("Show Data.....");
    });
  });
});


//-------------------------------------------------------------------------------------------         Solution to Avoid Callback Hell                                                       ---------------------------------------------------------------------------------------------


// Promises:                                                                                 Promises  Provide a more elegant way to handle asynchronous operations.They offer a cleaner syntax and better error handling.


// Async/Await:                                                                              The      async/await  syntax makes  asynchronus code look and  behave more like synchronous code ,  significantly  improving readability.

