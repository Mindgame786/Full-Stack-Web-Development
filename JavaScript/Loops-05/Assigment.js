{

  let i;
  for (i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }

  }

}


//  For Loop:-------------------------

// {

//   let i;
//   for (i = 2; i <= 100; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }

//   }

// }


//  Wile Loop:-----------------------------------


// let i = 1;  // ✅ i ko initialize karna zaroori hai

// while (i < 20) {
//   if (i % 2 !== 0) {
//     console.log(i); // ✅ odd number print karo
//   }
//   i++; // ✅ hamesha increment hona chahiye
// }




//  Do While Loop :------------------------------

// {


//   let i = 1;

//   do {
//     if (i % 2 !== 0) {
//       console.log(i); // ✅ odd number print
//     }
//     i++; // ✅ hamesha increment hona chahiye
//   } while (i < 20);

// }




let Pak = 1947;
let year = 0;

while (year != Pak) {
  year = prompt("In which year Pakistan came into being");
  year = Number(year); // ✅ convert input to number

  if (year === Pak) {
    console.log("✅ Correct Answer!");
    break;
  } else if (year > Pak) {
    alert("🔺 Too high! Try again.");
  } else {
    alert("🔻 Too low! Try again.");
  }
}

console.log("✅ Thanks for using the program!");







