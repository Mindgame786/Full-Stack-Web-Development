//-------------------------------Date-Type----------------------------------

// -------------Date-type means   variables  of types and values -------------------

// Q:  How to check value who is type of variables  ?
// Ans:  'typeof' element is   used for check type  of  variables.


// Major groups of Data types:
//           (a) Primitive           (b)  Non-Primitive


// (a) Primitive:

//     Define:These variables in which stored  a  Single  values (one-Data)  are called Primitive Datatype of  group.
//                    # There are seven  types of primitive Date Types....
//    Types:
// (1)   Numbers                   (2) Strings                  (3) Booleans                 (4)   Undefined          (5) Null                (6) Symbols                  (7)  BigInt


let salary = 60000;
let Name = "UMARJUTT";
let muslim = true;
let age;
let chk = null;
let var1 = Symbol("Description of Product");
let var2 = BigInt(398838484934);


console.log("Salary:", salary);
console.log("Salary:", typeof salary);


console.log("Name:", Name);
console.log("Name:", typeof Name);

console.log("Muslim:", muslim)
console.log("Muslim:", typeof muslim)

console.log("AGE:", age)
console.log("AGE:", typeof age)


console.log("CHK:", chk)
console.log("CHK:", typeof chk)

console.log("var1", var1)
console.log("var1", typeof var1)

console.log("var2", var2)
console.log("var2", typeof var2)






// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



// (b)   Non-Primitive:

//      Define:    More than one values of   values store  in  object arrays form are called non-primivtive Datatype of group.
//                     # There are three types of non-primitive

//   (1) Objects        (2) Arrays             (3)  Functions


//   (1) Objects:
// Objects are collections of different values of different types.
//  Arrays are type of object or branch of object:




let person = {
  firstName: 'UMARJUTT',   //  Here:  firstName is here Key  or 'UMARJUTT' is a Value.
  lastName: 'Naeem',
  age: 30,
  salary: 60000,
  perm: true,
};
// console.log(person);
// console.log(typeof person);




// If   Only Age Print in Console so 
// (1):
console.log("Salary:", person["salary"]);
//  (2):
console.log(`Salary: ${person.salary}, Last Name: ${person.lastName}`);

//(3):
// not apply both value but last value print down side in code...
console.log("Salary of Person:", person["salary", "lastName"]);

//(4):
console.log(person.age, person.salary, person.perm);





// (2).Array:

// Define:   Arrays are specialy types of objects used for storing ordered collections of values.Each value in an array has a numerical index starting from 0 and onword.

let numbers = [1, 2, 3, 4, 5];




// (3) Function:
//  Define:   Functions are blocks of designed to perform specific taskd and can be stored in variables.

function greet(name) {
  return ` Hello ,${name}!`;
}
console.log(greet("UMAR"));



// Array,Functions are Explain into next separate topic......









