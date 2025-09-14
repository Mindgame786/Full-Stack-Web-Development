import { useState } from "react";

function InputBoxData() {
  const [val, setVal] = useState("UMARJUTT");



  return (
    <>
      <h1 className="bg-zinc-50 font-bold mt-8 rounded-md  py-4 text-[30px] text-blue-400 text-shadow-gray-500 text-shadow-md  ">Input Box Data</h1>




      <input type="text" value={val} onChange={(event) => setVal(event.target.value)} placeholder="Enter Your Name... " className="py-2 border-2 border-gray-500 mt-8 rounded-md pl-2 hover:border-gray-600 " />



      <h1 className="bg-zinc-50 font-bold mt-8 rounded-md  py-4 text-[30px] text-green-500 text-shadow-gray-500 text-shadow-md  ">{val}</h1>



      <button onClick={() => setVal("")} className="bg-gradient-to-bl from-green-600 to-pink-600 py-2 px-4 rounded-md mt-4 font-semibold font-sans text-zinc-200 hover:text-zinc-300 hover:from-green-700 hover:to-pink-700  hover:bg-gradient-to-l">Reset Form</button>


    </>
  )
}

export default InputBoxData;