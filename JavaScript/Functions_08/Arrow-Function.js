//-----------------------------Arrow-Fuctions-JS-------------------------------------------

//  It's  a    simpler way to write functions in JS.
// Arrow Function Can Be Used without Parameters.

// Note:-
//  They  were intoduced in Es6 (ECMAScript 2015) to make writing functions quicker and easier.

// Method (1):

const add = (a, b) => {
  return a + b;
}
let answer = add(285, 385);
console.log(answer);
// console.log("Add Value", add(38, 48));


// Method (2):
// Next furture simple method =>

const added = (x, y) => x + y;
let Sum = added(23, 44);
console.log(Sum);


// Method(3):

const nop = () => "Welcome to no Parameter";

console.log(nop());




// Assignment # 01:

function findBigNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// let bignum = findBigNumber(37, 83);
// console.log("Big No :", bignum);
console.log("Big NO :", findBigNumber(452, 53));


//  Assignment # 02:

function isEven(x) {
  return x % 2 === 0;
}

// let Ans = isEven(12);
// console.log("What is Even Number?", Ans);

console.log("What is Even Number?", isEven(13));