//-----------------------------ForEach-Loop-in-JS------------------------------------------

//  This loop  is  a  method that helps us do something with each item in an array.



//--------------------------Function_Method_Difference--------------------------------------

//  ForEach is  method.  Although  both methods and functions work like same but methods are always associated with some sort of  data structure, like Array , String etc.




//---------------------------ForEach_Loop---------------------------------------------------
// Think of an array like a box  filled with different things:
// like numbers,words,or even objects.

// The forEach loop goes through each item in that box one by one, letting us do something with each item,like printing it out,adding to it,or changing it.


// Its a function that is  passed as  an  argument to another function are called callBackFuction.

// let colors = ["Blue", "Green", "Yellow", "Orange", "Red"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }


// ForEach Loop using:

{
  let color = ["Blue", "Green", "Yellow", "Orange", "Red"];
  color.forEach(function (item) {
    console.log(item);
  });

}

// Maybe using in arrow function:-

{
  let color = ["Blue", "Green", "Yellow", "Orange", "Red"];
  color.forEach((item) => {
    console.log(item);
  });

}



let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach((item) => {
  console.log(item + item);
})


// forEach_Loop Full Syntax:

{
  let color = ["Blue", "Green", "Yellow", "Orange", "Red"];
  color.forEach((item, index, array) => {
    console.log(`Color  ${item.toLocaleUpperCase()}    is  at  ${index} and     ${array}`);
  });
}


// forEach in JS is also know as "Higher Order Function/Method".
// Those Functions which use other functions as parameters or return functions.

