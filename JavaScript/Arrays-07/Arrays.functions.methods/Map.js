//-----------------------------------Arrays-Method-Map----------------------------------

// Map Array method in JavaScript is used to create a new array by applying a function to each elament of an existing array. It doesn't change the original arry.





let num = [3, 5, 7, 9, 11];
let Square = num.map(function (val) {
  return val * val;



});
console.log(num);
console.log(Square);


{

  let num = [3, 5, 7, 9, 11];
  let Square = num.map((val) => {
    return val * val;



  });
  console.log(num);
  console.log(Square);
}








//--------------------------Map & forEach Difference----------------------------------------

// Feature:           |          map()

// Purpose: Create a new  array by applying a function.
// Use Case: When you need a modified array.
// Performance: Slightly slower (creates a new array).


// Feature:           |          forEach()

// Purpose: Executes a function for each element without returning a new array.
// Use Case: When Performing actions like logging or updates.
// Performance: Faster (no new array creation).



// map also using without return only procesesing map foreach conclude similar.
{
  let num1 = [3, 5, 7, 9, 11];
  num1.map(val => {
    console.log(`Square of ${val} is : ${val * val}`);
  })
}



//-------------------------------------------------------------------------------------------

//--------------------------USe of Map for Array of Objects----------------------------------

//-------------------------------------------------------------------------------------------

// You can use the map method to transform an array of objects.

// This method creates new array with the results of calling a provided function on every element in the calling array.


// Example:-

const people = [
  { name: "UMARJUTT", age: 20 },
  { name: "BRANDJUTT", age: 21 },
  { name: "DONJUTT", age: 22 }
];


const names = people.map(function (val) {
  return val.name;
})
console.log(people)
console.log(names);



//-----------------------------------Assignment-Map-01---------------------------------------

let products = [
  { name: "Head phone", Price: 3000 },
  { name: "Laser Printer", Price: 50000 },
  { name: "Digital Camera", Price: 10000 },
];

console.log(products);

const discount = products.map(items => {


  return {
    name: items.name, Price: items.Price * 0.90  // 10 %  Discount why use * 0.9 :
  }


});

console.log(discount);


