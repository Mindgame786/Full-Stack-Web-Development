//------------------------------------Reduce_Array_Method------------------------------------

// It is used with arrays to process and reduce their contents to a single value.
// This method can perform operations,like SUM all values, Find MAximUm and Minimum value, to Concatenate strings etc.


let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((preValue, CurValue) => {
  return preValue + CurValue;


});
console.log(numbers);
console.log(sum);



{

  let numbers = [1, 2, 55, 4, 20];
  let sum = numbers.reduce((a, b) => {
    return a + b;


  });
  console.log(numbers)
  console.log(sum);
}


// Largest Number Array Find by reduce Method USing......

{

  let numbers = [1, 2, 55, 4, 20];
  let large = numbers.reduce((a, b) => {
    return a > b ? a : b


  });
  console.log(numbers)
  console.log(large);
}



// Smallest Number Array Find by reduce Method USing......

{

  let numbers = [1, 2, 55, 4, 20];
  let Smallest = numbers.reduce((a, b) => {
    return a < b ? a : b


  });
  console.log(numbers)
  console.log(Smallest);
}