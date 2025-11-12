// ------------------------------- Variables-----------------------------

//............................Types of Variables......................

//  (1) let                  (2) var                 (3) const  

// [Answer Same to Same but Aim use variabes in js differ should be understand why differ variables  { let,const or var }  etc].

// here: [A] is   a  variable,   or  [10]  is a  value, storage value in a 10 value.  //  


console.log("This is JavaScript Code In Console Window");

let

  a = 10;
b = 20;
c = 30;
r1 = a + b + c;

console.log(r1);

const
  d = 4;
e = 1;
f = 2;
r2 = d / f * d + f - e;
console.log(r2);


//   Important Point in js or Math role  in Mind Save ( /  , * ,   , + , or , - ) etc,ShortHand  DMAS  (Division)--> (Multiplication)--> (Addition)--> (Subtraction) etc, Now Answer is correct.

var
  g = 5;
h = 10;
i = 50;
r3 = g * h + i - h;
console.log(r3);

console.log("                                                                      ------ [ My Collection of Value ] ------ ")

console.log("r1 :", r1, "     r2 : ", r2, "      r3 : ", r3)




//------------ First Program in js --------------

let
  myname = "UMARJUTT";
age = 20;
months = age * 12;

console.log('My First Program in js');
console.log('My Name :', myname);
console.log("MY Age is :", age, "Years");
console.log('Age in Months is :', months, "months.");





// Important Point on variables of js

// not Answer error repeat age so not delclared  if not block......
//   let in Every-Movements  Value can be declared  but not same variable: specialy not block.

{
  let
    age = 10;
  age = 30;
  console.log(age);

}

{
  let
    // age = 65;
    age = 90;
  console.log(age);
}
// Answer  not error repeat age can  delclared when block in value


var
  age2 = 11111111111110;
age2 = 9999999999990;
console.log(age2);
// Answer 40 because var differ, same variable can be delclared  2015 in use but not now:



//                                              (constant):                                   constant in mostly use capitals letters
const
  MYAGE = 20;
myname = "UMARJUTT;";
details = (MYAGE + myname);

console.log("Age: ", MYAGE, "Years: ", " | ", "  Name:", myname)
//  fixed value of variables, Not Allow  changing in variables values,or not declared again.
















