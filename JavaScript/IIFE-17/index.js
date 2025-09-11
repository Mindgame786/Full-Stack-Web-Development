//---------------------------------IIFE------------------------------------------------------ -------------------(Immediately Invoked Function Expression)-------------------------------

//  An IIFE is  a JavaScript function that is executed immediatelt after it is defined.



function getResult(rollNo) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      console.log(`Result of ${rollNo}`);

      resolve(`Successfully ${rollNo}`);


    }, 2000);
  })

}

(async function Result() {

  console.log(`Result Anoucement..........`);

  await getResult(457953);
  await getResult(649653);
  await getResult(167953);
  await getResult(979534);
})();

// Result();  |  If  function is not call so short cut    small bracket use around function start to end and  end so () as well as above use in function in not call but working...