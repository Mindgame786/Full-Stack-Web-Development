// In JavaScript,classes and objects are fundamental concepts for structuring  code, especially  when working with object-oriented programming (oop). They help  developers orangize data and  functions,making code cleaner,reusable, and easier to manage.

//-----------------------------Classes_&_Objects_in_JavaScript-------------------------------


// What is  a  Class?
//  A  Class  in JS  like a blueprint for creating  objects.


// For instance:     Think of a  class  like a  car design:

// It describes what parts the car has  (Wheels, engine, color)  But doesn't represent a specific car with real-world details.


//-------------------------------------------------------------------------------------------

// What is   a  Object?

// An Object is  an   actual instance created from a  class, with real values assined to its properties.

// In JS  Object is  an  entity which have some Properties (state) and Behaviour (Methods).

// EXample:-
//            let car ={
//            brand: "Toyota",
//            model: "coralla",
//            price: "3000000",
//            startDetails:function(){
//            console.log("I Bought a new car...");
//              }};

//-------------------------------------------------------------------------------------------


let car = {
  brand: "Honda",
  model: "city",
  price: 3500000,


  myCar: () => {
    console.log("i  Bought Car");
  },
}


console.log(car);


//-------------------------------------------------------------------------------------------

//---------------------------Object_Prototype?-----------------------------------------------

// Its default property of an  object.Basically  Prototype itself is an  object,  which have different properties & methods.

// Here use Array ,Because Array is  a  basically  object:
// Array in  Prototype in  pop map push slice lenght concate,

let Color = ["Blue", "Red", "Green", "Yellow", "Orange"];
console.log(Color);

// IMPORTANT POINTS:----
// We can use Prototype methods & Properties in Js using Objects.

// We can also "Prototype", reference of an object.



let discount = {
  Price: 500,

  dis() {
    console.log(`10% Dsicount Allowed, Actual Price is : ${this.Price}`);
  },
};

console.log(discount.dis());

//-------------------------------------------------------------------------------------------
// Second Object:----------------------------

let product1 = {
  price1: 1000,
};
let product2 = {
  price2: 2000,
};
let product3 = {
  price3: 3000,
};
let product4 = {
  price4: 4000,
};
let product5 = {
  price5: 5000,
  dis() {
    console.log("No Discount of this Item");
  },
}


product1.__proto__ = discount;
product2.__proto__ = discount;
product3.__proto__ = discount;
product4.__proto__ = discount;
product5.__proto__ = discount;

console.log(product5.dis());

//-------------------------------------------------------------------------------------------

// IMPORTANT POINTS:

// When an object has two methods/functions with same name:
// 1.   Within Method
// 2.   Within Prototype

// Then JS  will use function which is within method.

//-------------------------------------------------------------------------------------------


