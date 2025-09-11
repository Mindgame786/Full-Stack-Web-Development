//------------------------------------Arrays_Methods---------------------------------------

//  JavaScript provides a variety of built-in methods to manipulate and interact with arrays.

// There are Two Type of Array_Methods 
//  (a)  Which Change Existing Array  (b) Which Create New Arrays



// (1) Push():

// Adds New elements to the end of an array and returns the new length of the array.

let fruits = ["apple", "banana", "cherry", "orange", "mango"];
console.log(fruits);
fruits.push("onion", "patato"); //You can also add more than one new elements with push;
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("unshift");
console.log(fruits);


// (2) Pop():

// Removes the last element from an array & can also return that element.

// Example:
let fruit = ["apple", "banana", "cherry", "orange", "mango"];
console.log(fruit);
fruit.shift();
console.log(fruit);

let items = fruit.pop();
console.log(items);



//  (3) Shift():

//  Removes the first element from an array and returns that element.

// Example:


// (4) unshift():

// Adds one or more elements to the beginning of an array and returns the new length of the array.


// (5) concat():

// Meges or more arrays and returns a new array.
// Example:

let fruit1 = ["apple", "banana", "orange"];
let fruit2 = ["cherry", "stobree", "grapes", "mango"];
let fullfruits = fruit1.concat(fruit2);
console.log(fullfruits);


// (6)  slice():

// Returns a copy of a portion of an array into  a new array, without modifying the original array.

// Note: Ending index value will not be included.

// Examples:

let fruitsgroup = ["apple", "banana", "cherry", "grapes", "mango", "orange"];
console.log(fruitsgroup);
let Newgroup = fruitsgroup.slice(1, 5);
console.log(Newgroup);


// (7) splice();

//   Adds/removes elements from an array at a specific index and returns the removed elements.

// Syntax:           array.splice(starting index,remove items,add items);

// Example:


let fruitsgroup1 = ["apple", "banana", "cherry", "grapes", "mango", "orange"];
console.log(fruitsgroup1);
let newfruitsgroup1 = fruitsgroup1.splice(2, 3);
console.log(fruitsgroup1);
console.log("Removed Elements", newfruitsgroup1);



{
  let fruitsgroup1 = ["apple", "banana", "cherry", "grapes", "mango", "orange"];
  console.log(fruitsgroup1);
  fruitsgroup1.splice(2, 0, "Kiwi", "Melean");
  console.log(fruitsgroup1);
}

//  Removes / Add Elements:-
{
  let fruitsgroup1 = ["apple", "banana", "cherry", "grapes", "mango", "orange"];
  console.log(fruitsgroup1);
  fruitsgroup1.splice(1, 2, "Kiwi", "Melean");
  console.log(fruitsgroup1);
}

// All Removes Elements:-
{
  let fruitsgroup1 = ["apple", "banana", "cherry", "grapes", "mango", "orange"];
  console.log(fruitsgroup1);
  fruitsgroup1.splice(2);
  console.log(fruitsgroup1);
}


// (8) indexOf():

//  Returns the first index at which a given items is found in the array,or -1 if it is not present.

// Example:-



{
  let fruitsgroup1 = ["apple", "banana", "cherry", "grapes", "mango", "orange"];
  console.log(fruitsgroup1);
  console.log(fruitsgroup1.indexOf("grapes"));

}


// (9) inludes():

//  checks whether an array includes a certain element,and returns true or false.

// Example:


{
  let fruitsgroup1 = ["apple", "banana", "cherry", "grapes", "mango", "orange"];
  console.log(fruitsgroup1);
  console.log(fruitsgroup1.includes("grapes"));

}


// (10) sort() :

// sorts the elements of an array in place and returns the sorted array.

// Example:

{
  let fruitsgroup1 = ["Banana", "Apple", "cherry", "grapes", "mango", "orange"];
  console.log(fruitsgroup1);
  console.log(fruitsgroup1.sort());

}




// (11)  reverse():


// Reverse the order of the elements in an array.

// Example:

{
  let fruitsgroup1 = ["Banana", "Apple", "cherry", "grapes", "mango", "orange"];
  console.log(fruitsgroup1);
  console.log(fruitsgroup1.reverse());

}


// (12) Join:

// Joins all elements of an array into a string.

// Example:

{
  let fruitsgroup1 = ["Banana", "Apple", "cherry", "grapes", "mango", "orange"];
  console.log(fruitsgroup1);
  let str = fruitsgroup1.join(',');
  console.log(str);
  console.log(typeof (str));
  // console.log(fruitsgroup1.join("-"));   may be shortcut use easy inline.....

}
