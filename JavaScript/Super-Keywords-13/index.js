//------------------------Super-Keywords-In-JS-----------------------------------------------

// The  super keyword in JS  is primarily used to access properties and methods of a parent class from a child class. (OR)
//  USed to  Call  constructor of Parent Class.

// use:
// super();   super(arguments);        super.parentfunction();



class company {
  constructor(color, size) {
    this.color = color;
    this.size = size;

  }

  brand = "Smart 7";
  location = "Pakistan";


  show() {
    console.log(`Made in ${this.location} by  ${this.brand} mobile color is ${this.color} and big Size ${this.size} inch`);
  }
}


class OPPO extends company {
  constructor(color, size) {
    super(color, size);
    this.color = color;
    this.size = size;
  }


  Model() {
    console.log(`Price of this Model is : 90000/- Mobile color is  ${this.color} and size ${this.size} `);
    this.show();
    super.show();
  }
}


let Mobile = new OPPO("Blue", 6.9);




