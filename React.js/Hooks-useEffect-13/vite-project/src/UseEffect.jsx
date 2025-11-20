import React, { useState, useEffect } from 'react';

function USeEffect() {
  const [count, setCount] = useState(1);
  const [data,setData]=useState(5);



  //-----------------------------------------------------------------------------------------

   function oneCall () {
    console.log("Counter:",count,"\t","data:",data);
  }  // Runs only once

  useEffect(()=>{
    
    oneCall();

  },[data,count]);


//-------------------------------------------------------------------------------------------


  return (
    <>
        <div className="p-6 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">USeEffect in React.jsx</h1>
        <h1 className="text-xl text-blue-800 font-semibold border-2 py-2  px-8 rounded border-gray-700 bg-lime-200">Counter: {count}</h1>
        <h1 className="text-xl text-blue-800 font-semibold border-2 py-2  px-8 rounded border-gray-700 bg-orange-200">Data: {data}</h1>
          <button
        className="border-2 border-gray-800  font-[Baloo-Bhai 2] bg-amber-300 text-zinc-600 py-2 px-4 rounded-xl border-none hover:text-zinc-400  font-bold hover:bg-amber-400 transition-colors"
        onClick={() => setCount(count + 1)}> Counter </button>


          <button
        className="border-2 border-gray-800  font-[Baloo-Bhai 2] bg-blue-300 text-zinc-600 py-2 px-4 rounded-xl border-none hover:text-zinc-200  font-bold hover:bg-blue-500 transition-colors"
        onClick={() => setData(data + 5)}> Data </button>
        </div>
    </>
  );
}

export default USeEffect;
