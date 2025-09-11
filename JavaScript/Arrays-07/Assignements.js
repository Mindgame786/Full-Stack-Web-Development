let No = [2, 3, 4, 11, 6, 33, 8, 99, 804];
let sum = 0;
let largeNo = No[0];

let count = 0;

// for (let i of No) {
//   console.log(i);
//   sum += i;
// }
// console.log(sum);


// {
//   for (let i = No.length; i >= 0; i--)
//     console.log(No[i])
// }

{
  for (let i = 0; i < No.length; i++) {
    console.log(No[i])

    if (No[i] > largeNo) {
      largeNo = No[i];
    }
  }
  console.log("Large Number in Array :", largeNo)
}





{
  for (let i = 0; i < No.length; i++) {
    console.log(No[i]);
    if (No[i] % 2 === 0) {
      count++;
    }
  }
  console.log(count)
}




