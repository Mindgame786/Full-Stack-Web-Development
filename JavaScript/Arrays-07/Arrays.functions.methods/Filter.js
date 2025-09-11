//-----------------------------------Filter_Method_Array-------------------------------------

// Its a built in function that helps you create a new array filled with elements that pass a certain condition. This method is used when you want to keep only specific items from an array based on a rule or criteria.


const words = ["Cat", "Dog", "Loin", "Rat", "Elephant", "Snake"];

const Longwords = words.filter((value) => {

  return value.length == 3;
});
console.log(words);
console.log(Longwords);



{
  let numbers = [1, 2, 3, 4, 5, 5, 7, 7, 8, 9, 9, 55, 677, 3, 44, 7, 7, 6, 8, 8, 343, 45, 6];
  let even = numbers.filter(val => {
    return val % 2 === 0;
  })
  console.log(numbers);
  console.log("Even Number is :", even);
}

{
  let numbers = [1, 2, 3, 4, 5, 5, 7, 7, 8, 9, 9, 55, 677, 3, 44, 7, 7, 6, 8, 8, 343, 45, 6];
  let odd = numbers.filter(val => {
    return val % 2 !== 0;
  })
  console.log("Odd Numbers is :", odd);
}