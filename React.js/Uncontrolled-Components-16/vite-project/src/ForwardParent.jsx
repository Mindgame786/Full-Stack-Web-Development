import React, { useRef } from "react";
import ChildComponent from "./ForwardChild";

function ParentComponent() {
  // ✅ Parent ref create

  const inputRef = useRef(null);

  
  const focusInput = () => {
    inputRef.current.focus(); // ✅ Child input پر direct focus
    inputRef.current.value='2025';
    inputRef.current.style.color='#3d4f91';
    inputRef.current.style.backgroundColor='#ccc';
    inputRef.current.style.fontWeight ='bold';
  };

  return (
    <div className="flex flex-col mt-4 items-center justify-center min-h-screen bg-green-100 pt-20">


      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Parent Component
      </h1>

      <ChildComponent ref={inputRef} />

      <button
        onClick={focusInput}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Child Input پر Focus کریں
      </button>


    </div>
  );
}

export default ParentComponent;
