//--------------------------------Loops-----------------------------------------------------

//  Loops allow you to execute a block of  code repeatedly until a certain condition is met.
let firstName = "UMARJUTT"
console.log(firstName);
console.log(firstName);

//  There are three type of loop,
//  (a) for loop  (b) while loop  (c) do while loop


// (a) For loop:

// let
//   i = 0;
// sum = 0;

// for (i = 1; i <= 5; i++) {

//   // console.log("UMARJUTT");
//   console.log(i);
//   sum = sum + i;
// }
// console.log("============================");
// console.log("Sum Of Value :", sum);
// console.log(i);


let n = prompt("Enter Any No.:");
let i = 0;
let res = 0;

// ----------------- Input Validation ------------------

if (n.trim() === "") {
  console.log("❌ Invalid input. Please enter a number.");
} else if (isNaN(n) || Number(n) < 0) {
  console.log("❌ Invalid number. Please enter a valid non-negative number.");
} else {
  n = Number(n); // Convert input to number after validation

  // ----------------- Table Printing ------------------
  for (i = 1; i <= 10; i++) {
    res = i * n;
    console.log(i + " x " + n + " = " + res);
  }
}


// (b) While Loop:
//  While loop Execute when condition true,
{

  let
    i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }

}


// (c) Do While Loop:
// Do While loop Execute when condition true |  if false so minimum one time execute abuslutely,


{

  let
    i = 1;
  do {
    console.log(i);

    i++;
  } while (i >= 5);
  console.log(i);

}



// Special Types of Loops in JS:-
//   (a)  For-of Loop:        (b)   For-in Loop:




// (a) for-of Loop:
// Note:
//          No need to initialize a varible or increment or decrement operation.

/*{

  let BrandName = prompt("Enter String :");
  let strsize = 0;

  for (let BN of BrandName) {
    console.log("Letter of String is :", BN);
    strsize++;
  }

  console.log("Length of String is :", strsize);

}*/


//  (b) For-in Loop:
//  It is used to run loop for an object:

/*{

  
  let employee = {
  fullName: "UMARJUTT",
  age: 20,
  salary: 80000,
  ispern: true,
}

for (let emp in employee) {
  console.log(emp, ":", employee[emp]);
}

}

*/
















