//-------------------Error-Handling----------------------------------------------------------

// In JavaScript, try and catch are used for error handling.


// These allow you to  execute code and "catch"  any errors that might occur during execution.
// This ensures that errors do not break your program execution.



let studentName = "UMARJUTt";
let age = 20;
let totalMarks = 1100;
let obtMarks = 843;
let percentage = obtMarks / totalMarks * 100;
console.log("Student Name is " + studentName);
console.log("Student Age is " + age);
console.log("Student Obtain Marks is " + obtMarks);
console.log("Student Percentage is " + percentage);


// console.log(`Student Name is ${studentName} Student Age is ${age} Total Marks Matric is ${totalMarks} and Student Obtain Marks is ${obtMarks} .Student Percentage is ${percentage} `);


try {

  console.log("Total Marks Matric is " + TotalMarks);

} catch (error) {
  console.log(error);
}