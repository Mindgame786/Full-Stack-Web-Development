import { useState } from "react";
import DisplayComponent from "./DisplayComponent";

function LifeCycle() {
  const [value, setValue] = useState(1);

  const [showChild, setShowChild] = useState(true);

  const buttonStyle =
    "px-5 py-2 font-semibold rounded-lg border border-gray-300 bg-white text-gray-800";

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 ">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center bg-gray-200 text-gray-800 rounded-xl py-6 px-6 mb-10">
        React Lifecycle Demo
      </h1>


      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button onClick={() => setValue(value + 1)} className={buttonStyle}>
          Increase Value
        </button>

        <button onClick={() => setShowChild(!showChild)} className={buttonStyle}>
          {showChild ? "Unmount Child" : "Mount Child"}
        </button>
      </div>

      {/* Child Component */}
      {showChild && <DisplayComponent number={value} />}
    </div>
  );
}

export default LifeCycle;
