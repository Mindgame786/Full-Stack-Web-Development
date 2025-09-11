import { useState } from "react";

function Assignment() {

  const [count, setCount] = useState(0);
  return (
    <>
      <h2 className='bg-cyan-400 text-indigo-700 mt-4 py-2 text-2xl font-medium font-sans'>Hit Counter</h2>


      <h1 className='bg-lime-400 text-fuchsia-600 mt-4 py-2 text-2xl font-medium font-sans'>Counter:{count}</h1>


      <button onClick={() => setCount(count + 1)} className="py-2 px-4 mt-3 rounded-sm bg-blue-500 hover:bg-blue-600 hover:text-amber-50 font-sans font-medium">Plus</button>

      <button onClick={() => setCount(count - 1)} className="py-2 px-4 mt-3 ml-3 rounded-sm bg-blue-500 hover:bg-blue-600 hover:text-amber-50 font-sans font-medium">Minus</button>




    </>
  )
}

export default Assignment;