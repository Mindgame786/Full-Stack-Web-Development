//-------------------------Async_Await-------------------------------------------------------

//   In JS,  async  and  await are used to handle asynchronous operations in  a  more readable and structured way. These make code easier to write and understand compared to traditional callback or promise chaining methods.


//---------------------------------Async-----------------------------------------------------

// The async keyword is used to create a special type of function called an "asynchronous function".                                                                                   An async function always gives back a  promise.                                              If the function returns a value, JavasScript automatically  Puts it inside a resolved promise.                                                                                     If an error occurs inside the async function, Js automatically provide error in a  rejectd promise.                                                                                     We can make any normal function async function by prefixing Async Keyword at start.




async function myfunction() {
  console.log("JavaScript Tutorial");
}

myfunction();


//------------------------------------Await------------------------------------------------------

// What is  await ?
//   The  await keyword is used  inside async functions to pause the execution of the function until the promise resolves or rejects.

//Key Points:

// Waits for the promise to settle (resolve or reject).
// Can only be used inside async functions.
// If the promise is rejected, it throws the error which can be caught using try...catch

function getResult(rollNo) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      console.log(`Result of ${rollNo}`);

      resolve(`Successfully ${rollNo}`);


    }, 2000);
  })

}

async function Result() {

  console.log(`Result Anoucement..........`);

  await getResult(457953);
  await getResult(649653);
  await getResult(167953);
  await getResult(979534);
}

Result();

