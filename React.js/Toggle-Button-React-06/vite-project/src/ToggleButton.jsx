import { useState } from "react";
import MyImage from "./MyImage";

function ToggleButton() {



  const [display, setDisplay] = useState(true);



  return (
    <>
      <h1 className="text-gray-950 font-bold py-2 bg-gray-300">Toggle Button (ON|OFF)</h1>
      <button onClick={() => setDisplay(!display)} className="bg-gradient-to-b from-blue-500 to-pink-400  text-white  rounded-md font-medium py-2 px-4 mt-2 hover:bg-blue-600 hover:bg-gradient-to-b  hover:from-blue-600 hover:to-pink-500 
             hover:text-amber-100 transition">ON | OFF</button>

      <br />
      <br />



      {/* {


        display ? <h1 className="text-blue-600 text-3xl  font-bold mt-4 py-6 bg-blue-200 rounded-sm">UMARJUTT</h1> :
          <h1 className="mt-2 font-medium font-sans text-red-500">User Not Found!</h1>


      } */}
      {


        display ? <MyImage /> : null


      }




    </>
  )
}

export default ToggleButton;