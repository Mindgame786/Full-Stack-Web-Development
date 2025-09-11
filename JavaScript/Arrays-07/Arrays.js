//--------------------------------Arrays----------------------------------------------------

//  Arrays is a special type of object used to store multiple values in a single variable.

// let fruits = ["apple","banana","cherry"];
//  let age = [10,20,30,40,50]
//   let mixedArray = [42,"Hello",true];

//  Features of Array:
//  (1) Arrays are ordered, meaning each element has a specific position within the array,known as an index. Form 0123.....

//   (2) Arrays in JavaScript are not fixed in size. They can grow or shrink as elements are added or removed.

//Arrays in Js come with a variety of built-in methods & properties to deal the data.
//  .Push() : Adds an element to the end of th array.
//  .pop() : removes the last element from the array.
//  .length(): Give the number of elements in the arrays.

// Examples:

let fruits = ["Orange", "Mango", "Cherry", "Banana", "Peach", "Apple"];
console.log(fruits);
console.log(fruits.length);
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);

// }



{
  for (let x of fruits) {
    console.log(x);
  }
}


{
  for (let y in fruits) {
    console.log(y);
    console.log(fruits[y]);
  }
}





