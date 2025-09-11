//------------------------------------String-Length-JS------------------------------------


//  A string is  a sequence of characters used to represent text.

//   Three Types of String can creates,
//  (a) single  (b)  double   (c)  backticks with create String who called Template-Literals.


//  JS Built-in Properties and Functions/Methods

// (a) String Lenth:

let employeeName = "UMAR JUTT";
let country = "Pakitan";
let strlen = country.length;

// for (let i = 0; i < strlen; i++) {
//   console.log("String Length :", country[i]);
// }


for (let i = strlen - 1; i >= 0; i--) {
  console.log("String Length :", country[i]);
}

// console.log("Length of 1st String :", country, ":", country.length);
// console.log("Lenght of 2nd String :", employeeName, ":", strlen);
// console.log(employeeName[0]);
// console.log(employeeName[1]);
// console.log(country[0]);
// console.log(country[1]);



//------------------------------------Escape_Sequences_in_Js---------------------------------

//  These are  Special codes that tell JavaScript to do something specific within a text. They start with a backlash "\".



//----------------------Most Common Escape Sequence Codes in Js-----------------------------

// (a) \n    Newline          (b) \t         Horizontal tab     (c) \b    Backspace
//  (d)  \'   Single quote      (e)  \"     Double quote        (d) \\ for \ Backslach print,


let str = "UMAR\nJUTT";     //(a) Newline
console.log(str);
console.log(str.length);

let str2 = "Potery :\t \n\t\t Hey Dear How are you!, \nI think busy in work,\b but are you free.\n\t\t \" Important lines \"";
console.log(str2);




//-------------------------------Template Literals--------------------------------

//  Tempalate Literals are a powerfull featue that provide a cleaner and more expressive way to create strings in JavaScript.They are enclosed by backticks (``) instead of single or double quotes.


//KeyFeatures:-                                                                                                                  (2) Multi-Line-Strings:
//  You can write strings that span multiple lines (without) using backslashes (\n) to escape newlines.


//-----------------------------(1) String-Interpolation:-------------------------------------

//  You can embed expressions directly within a string using:                                ${epression}                  This allows you to dynamically create strings based on varibles or calculations.



let msg1 = `Welcome to my Village`;
let msg2 = "Welcome to my Village";
let msg3 = 'Welcome to my Village';

let msg4 = `Welcome to my Village
We are together enjoy Every Movements`;

console.log(msg1);
console.log(msg2);
console.log(msg3);
console.log(msg4);

let a = 20;
let b = 30;
// let c;
// c = `Value of a: ${a} Value of b:  ${b}  and sum is: ${a + b}`
console.log(`Value of a: ${a} Value of b:  ${b}  and sum is: ${a + b}`);
// console.log("Value of a :", a, ":", "Value of b :", b, ":", "and Sum is :", a + b);
// console.log(c);

let username = prompt("Enter Your User Name :");
console.log(`Welcome ! Mr. ${username}`);




//-----------------------------------While-Table-Print--------------------------------------

// {
//   let no = prompt("Enter Any No.");
//   let i = 1;
//   let res;

//   while (i <= 10) {
//     res = `${i} x ${no} = ${i * no}  `;
//     console.log(res);
//     i++;

//   }

// }


//--------------------------------Do-While-Table-Print--------------------------------------



// {
//   let no = prompt("Enter Any No1");
//   let i = 1;
//   let res;

//   do {
//     res = `${i} x ${no} = ${i * no}  `;
//     console.log(res);
//     i++;
//   }
//   while (i <= 10);
// }




//------------------------------String_Methods-----------------------------------------------

// There are few built-in functions to deal with strings in js,called Methods.

//  String.method();                    but String.length;  is a  Property,

// (a) toUpperCase();
//  it returns this string converted to uppercase.

// (b) toLowerCase();
//   it returns this string converted to lowercase.


// (c) Trim();
// it removes whitespace from both ends of the string and returns a new string.


//  (d) includes();
//     It performs a case-sensitive search to decide whether a given string found within other string,it returns "true" if  found else returns "false" value.

//------------------------------------(a)_(b)_(c)_(d)----------------------------------------


const str1 = "wE aRe LeAenINg JavAscrIpt WitH UmAr JuTt";
const str3 = "                                                                              wE aRe LeAenINg JavAscrIpt WitH UmAr JuTt                                      ";

const str4 = str3.trim();

const str5 = "hello dear sir";
if (str5.includes("dear")) {

  console.log("Winner is dear umar");

}
else {
  console.log("Winner is not umar")
}


const PhoneNo = prompt("Enter phone No :");
if (PhoneNo.startsWith("+")) {
  console.log("Correct Phone No.")
}
else {
  console.log("Invalid Phone No.")
}


// if (url.startsWith("www")) {
//   console.log("Valid URL")
// }
// else {
//   console.log("Invalid URL");
// }


// console.log(string.toLocaleLowerCase());
console.log(str1.toLocaleUpperCase());
console.log(str3);
console.log(str4);

// Note:-  Methods never change original strings because by default in js string are because by default in JS string are immutable (not changeble), so methods always return new value.




//  Part-2 String Methods:


// (a) String.slice()
//  it returns a substring (part of String) from a string.
//  syntax: 
//         string.slice(starting index , ending index);
//  Note:  Ending character will not display.

// Example:
const brand = "Mercedes";
console.log(brand.slice(0, 4));


// (b) String.concat();
// it combine two strings.
//       syntax:
// string1.concat(string2);

// Example:

let str8 = "Welcome To ";
let str9 = "JavaScript";
let str11 = " 2025;"
let str10 = str8.concat(str9, str11);    // let str10 = str8+str9;
console.log(str10);


// (c) String.replace();
//  it will replace a part of string with new string.
//  syntax:
//  string.replace(string1,string2);  // string1 find        string2 Replaced 

//  Example:

let message1 = "I am Learning  JS With Shahid Naeem";
let message2 = message1.replace("JS", "JavaScript");
console.log(message2);



// (d) String.replaceAll();
//  it will replace all  part of string with new string.
//  syntax:
//  string.replaceAll(string1,string2);  // string1 find        string2 Replaced 

//  Example:

let str20 = "UMARJUTT";
console.log(str20);
console.log(str20.replaceAll("U", "A"));
console.log(str20.replace("U", "A"));








