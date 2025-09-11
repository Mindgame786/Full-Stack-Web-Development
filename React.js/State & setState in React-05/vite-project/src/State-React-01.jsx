function StateInReact() {
  let mainCity = "Lahore Written By Variable";

  // Arrow Function By Change CityName
  let changeCity = () => {
    mainCity = "Lahore Written By Variable & Change City Faisalabad";
    alert(mainCity);
  }



  return (
    <>
      <h1 className='bg-cyan-300 text-amber-600 mt-4 py-3 text-2xl font-medium font-sans'>State In React</h1>
      <h2 className='bg-emerald-300 text-indigo-500 mt-4 py-3 text-2xl font-medium font-sans'>{mainCity}</h2>
      <button onClick={changeCity} className="py-2 px-4 mt-3 rounded-sm bg-blue-500 hover:bg-blue-600 hover:text-amber-50 font-sans font-medium">ChangeCity</button>

    </>
  )
}

export default StateInReact;



// Big Problem Here No solve by variable use so USe State or UseState as well as written in js file doc in this jsx file problem realistically is  no change value on screen on click button but change temparay on alert so create new jsx file now working with smart useState so let's start now!