//--------------------------------Promises---------------------------------------------------

// A  Promise  is  an  Object that represents the eventual completion  (or failure) of an asynchronous operation and its resulting value.


//  Syntax:

//             const promise = new Promise ((resolve , reject)=>{
//                resolve("Operation successful");
//                reject("Operation failed.");
//          });


//---------------------------------------------------------------------------------------------                                Promise  State                                               ---------------------------------------------------------------------------------------------

// (1) Pending(or) unfulfilled       (2) Fulfilled  --->  resolve    ---> Reject

//-------------------------------------------------------------------------------------------

// let promise = new Promise((resolve, reject) => {
//   console.log("This is an Example of Promise");
// })
// console.log(promise);




// function getResult(rollNo) {

//   return new Promise((resolve, reject) => {


//     setTimeout(() => {

//       // console.log("Result of Student :" + rollNo);
//       // resolve("Data Found Successfully");
//       // reject("Data Not Found !");
//       reject("Incorrect Roll No !");
//       // resolve("Result of  Student :" + rollNo);

//     }, 2000);



//   })



// }

// let student1 = getResult(442277);

// student1.then((res) => {

//   console.log("Result Found :", res);

// })


// student1.catch((err) => {

//   console.log("Result Not Found :", err);

// })


//--------------------------------------------------------------------------------------------                               Promise Chaining                                               ---------------------------------------------------------------------------------------------

//   A  Promise Chain is  a   sequence of  .then()  calls.   it  allows you to handle a series of  asynchronous tasks  in  order, making the code cleaner and avoiding nested callbacks.

{




  function getResult(rollNo) {

    return new Promise((resolve, reject) => {


      setTimeout(() => {

        resolve("Result of  Student :" + rollNo);

      }, 3000);



    })



  }


  getResult(234553).then((res) => {
    console.log("Result Found1 :", res);
    return getResult(244994);

  }).then((res) => {
    console.log("Result Found2 :", res);
    return getResult(220995);
  }).then((res) => {
    console.log("Result Found3 :", res);
  })







  // getResult(442277).then((res) => {

  //   console.log("Result Found :", res);



  //   getResult(566379).then((res) => {

  //     console.log("Result Found :", res);

  //     getResult(119933).then((res) => {

  //       console.log("Result Found :", res);

  //     });

  //   });


  // });







}