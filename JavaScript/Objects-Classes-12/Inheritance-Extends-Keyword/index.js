//-------------------------------Inheritance-------------------------------------------------

// inheritance  in JS  allows one  object to get  (OR)  use properties and methods from another from another object.




class parent {
  show() {
    console.log("This is parent Area")
  }
}

class child extends parent {

}

let UMARJUTT = new child();







class company {
  brand = "Smart 7";
  location = "Pakistan";


  show() {
    console.log(`Made in ${this.location} by  ${this.brand}`);
  }
}


class Smart12 extends company {

  model() {
    console.log("Price of this Model is : 75000/- ");
  }
}


class OPPO extends company {

  model() {
    console.log("Price of this Model is : 90000/- ");
  }
}

let world1 = new Smart12();
let world2 = new OPPO();




