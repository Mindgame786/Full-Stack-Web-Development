//-----------------------------------OPERATORS------------------------------------------
//  " These are special symbols used to perform operations on operands are called operator ".

// Example:    A + B      in e.g  + is   a   operator     A,B    is  a    Operands      OR  [A+B]--> Expression.


// There are five type of Operators..
//  (1) Arithmetic Operators
//  (2) Assignment Operators
//  (3) Comparison Operators
//  (4) Logical Operators
//  (5)  Ternary Operators


// ///////////////////////////////////////////////////////////////////////////////////////

// (1) Arithemetic Operators

// (a) Addition   (+)       :Adds two Operands.
//  (b) Subtraction  (-)     :Subtracts the second Operand From the first.
//   (c)  Multiplication (*)   :Mutiplies two operands.
//   (d)  Division    (/)     :Divides the first operand by the second.
// (e) Modulus (%)   : Return the remainder of division.
//  (f)  Exponentiation (**)    :This operator raises the first operand to the power of the second operand.
// (g) Increment   (++)   :Increases an Operand by One.
//  (h) Decrement   (--)   :Decrease an operand by one.  

//   D--;   // Isay kehte hain "Post-Decrement"
//    --D;   // Isay kehte hain "Pre-Decrement"

//    D++;   // Isay kehte hain "Post-Increment"
//    ++D;   // Isay kehte hain "Pre-Increment"



// Example of Arithemetic Operators .....

let
  a = 4;
b = 2;
c = 6;
d = 3;
R1 = a % b;
R2 = a ** b;
R3 = ++a;
R5 = a++;
// Rule  MD-->AS
R4 = b * d / c + c - d;
console.log("Total value of R1,R2,R3,R4,R5:", R1, R2, ++R3, R4, ++R5);
R6 = --d;
console.log(R6);



// (2) Assignment Operators:

//  A Operator is  Used to Assign Any  value of variable.

// Examples:

let age = 30;

let name = "UMAR";

// (a)  Here  ('=')  sign is called Assignment operator.



// (b)Compound Add Assignment Operator  '+=' :-
{

  let
    b = 5;
  b += 1;             // OR   b = b + 1;
  console.log(b += 1);

}


//  (c)Compound Subtract Assignment Operator  '-=' :-


{

  let

    d = 20;
  d -= 1;
  console.log(d);

}


//  (d) Compound Multiply Assignment Operator :-

{
  let

    m = 5;
  m **= 4;
  // m *= 10;
  console.log(m);
}


// (c) Compound Divide Assignment Operator :-

{
  let
    e = 30;
  e /= 15;
  console.log(e);
}

//  (d)  Compound Modulus Assignment Operator :- " is also called Shorthand Assign Oper ",

{

  m = 45;
  m %= 2;
  console.log(m);

  // Important Shortcut  is   for console.log  write on vsc, so  cl or Enter plus,

}



// (3) Comparison Operators

//   A Operator used to Compare two values & always Provide Boolean Result.
//                          (True  / False)

//  (a) Equal To '=='  comparison Operator:-

{
  let
    a = 10;
  b = 30;
  c = "10";
  console.log(a == c);
}


// (b) Equal To &  Type '===' comparison Operator:-

//   Important Point  in this case  ===  also typeof check value or  type both check ?

{
  let
    a = 40;
  b = "10";
  console.log(a === b);
}


// (c) Not Equal To '!=' comparison Operator :-

{
  let
    f = 40;
  g = 60;
  console.log(f != g);
}


//  (d) Not Equal To Type  '!==' comparison Operator :-

{

  r = 40;
  l = '40';
  console.log(r !== l);

}


// (e)Same As  Less than '<' , Greater Than '>' comparison Operator :-

{

  a = 10;
  b = 30;
  console.log(a > b);
  // console.log(a < b);


}

//  (f) Same As Less than '<' , Greator than Equals To '>=' comparison Operator :-

{
  a = 30;
  b = 20;
  console.log(a >= b);
  // console.log(a <= b);
  //  Important Point in this case two check if one condition true so Ans is True ;
}



//  (4) Logical Operators:-

//    Eqaluate multiple expressions and give us final Boolean result,  (True / False);

// There are three Types of  Logical Operators:

// (a)  AND  ' && ' ;    (b)  OR  ' || '   (c)  NOT   ' ! '


// (a) AND  ' && ' :-

//   in this condition  both condition if true so Ans is True so if one Experssion false so Ans is  False ok,

{
  let
    age = 20;
  nationality = "Pakistan";
  console.log(age > 18);
  console.log(nationality == "Pakistan");
  console.log("issue CNIC: ", age > 18 && nationality == "Pakistan");
}


//  (b) OR  ' || '  :-

//  in this condition both condition if true so Ans is True so if one Experssion true so Ans is True  ok,

{
  let
    age = 55;
  govemp = true;
  console.log("First Exp= age > 60 :", age > 60);
  console.log("Second Exp= Govt. Employee :", govemp == true);
  console.log("final Decision: Free Treatment:", age > 60 || govemp == true);
}

//  (c)  NOt ' ! ' :-

//  in this condition  use  ! sign so Ans reverse   true , false .

{
  let
    age = 30;
  console.log("Age = 30 ", !(age > 20));
}




//    (5)  Ternary Operators:-

//  In this condition  used for decision making and always used with three operands.

{
  let marks, sstatus;
  marks = 40;
  marks >= 33 ? sstatus = "Pass" : sstatus = "Fail";
  console.log("Student Status :", sstatus);

}



{
  let
    age = 20;
  age >= 18 ? console.log("He Can Drive") : console.log("He can't Drive.");

}

// OR

{
  let
    age = 20;
  age >= 18 ? drive = "He Can Drive" : drive = "He Can't Drive";
  console.log("On Road :", drive);


}



// Important Example:

{

  let
    empname = "UMARJUTT";
  salary = 100000;
  tex = 0;
  salary >= 100000 ? tex = 10000 : tex = 0;
  // console.log("Employee Name :", empname);
  // console.log("Employee Salary :", salary);
  // console.log("Tex :", tex);
  // console.log("Net Salary :", salary - tex);

  console.log("Employee Name :", empname, "  Salary :", salary, "  Tex :", tex, "  Net Salary :", salary - tex);
}














