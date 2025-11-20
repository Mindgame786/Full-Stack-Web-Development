//------------------------------------SetInterval()------------------------------------------

// setInterval() is a JavaScript function that repeatedly calls another function at a fixed time interval (in milliseconds).

// BAsic Syntax:

// const intervalID = setinterval(callback(),delay);

// when to use setInterval()
// Real time clocks Auto-refreshing data  countdown timers Animations or transitions over time.

// IMPORTANT POINT:

// Always clear intervals when a component unmounts, this prevents memory leaks.
// clearInterval(interval);
// USE inside useEffect() for side-effects control.

// Example 

//  const intervalID = setInterval(()=>{
  //  console.log("THis runs every 2 seconds");
  // },200);

  // return ()=> clearInterval(intervalID);

  //======================================================================================================================================================================================
