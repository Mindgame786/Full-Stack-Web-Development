//----------------------------------Switch-Statement--------------------------------------

//  Switch statement checks expressions , finds match using case and runs code until stop using break.

let num1 = prompt("Enter num1");
let num2 = prompt("Enter num2");
let Result = 0;

let operator = prompt("Enter Operator :");

switch (operator) {
  case "+":
    Result = num1 + num2;
    break;

  case "-":
    Result = num1 - num2;
    break;

  case "/":
    Result = num1 / num2;
    break;

  case "*":
    Result = num1 * num2;
    break;

  case "%":
    Result = num1 % num2;
    break;

  default:
    alert("Invalid Input");
}

if (Result != 0)

  console.log(num1, operator, num2, "=", Result);




