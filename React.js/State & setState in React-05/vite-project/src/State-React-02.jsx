import { useState } from "react";

function StateReact() {
  const [city, setCity] = useState('Faisalabad');


  // function mycity() {

  //   setCity("Multan");
  // }


  return (
    <>
      <h1 className='bg-pink-400 text-indigo-700 mt-4 py-3 text-2xl font-medium font-sans'>State In React</h1>
      <h2 className='bg-emerald-300 text-indigo-700 mt-4 py-2 text-2xl font-medium font-sans'>{city}</h2>

      <button onClick={() => setCity("Karachi")} className="py-2 px-4 mt-3 rounded-sm bg-blue-500 hover:bg-blue-600 hover:text-amber-50 font-sans font-medium">ChangeCity</button>


    </>
  )
}

export default StateReact;