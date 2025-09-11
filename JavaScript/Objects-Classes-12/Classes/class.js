//------------------------------------Class--------------------------------------------------

// In JavaScript, a  class is  a  blueprint for creating multiple objects.

// How To Create Object From Class?

// let employee={
//   fullname:"UMARJUTT",
//   Location:"Faisalabad",
//   Salary:80000,
// }


class employee {
  constructor(fullname, salary, Location) {
    console.log("Hello !");
    this.fullname = fullname;
    this.Location = Location;
    this.salary = salary;

  }

  detail() {
    console.log(`Employee Name : ${this.fullname}  and Salary : ${this.salary} and Location is ${this.Location}`)
  };

}

let emp1 = new employee("UMARJUTT", 6777777, "Faisalabad");
let emp2 = new employee("UMARJUTTGBRAND", 8999999, "Lahore");
let emp3 = new employee("UMARhello", 454499, "Karachi");
let emp4 = new employee("UMARDON", 2445677777, "Multan");
let emp5 = new employee("BRAND", 65444333, "Quetta");


// console.log(emp);


//-------------------------------------------------------------------------------------------

//---------------------------Constructor-----------------------------------------------------

// The constructor is a  special  method in  a  class.
// It is automatically  called when a new object is created from the class using the new keyword.


