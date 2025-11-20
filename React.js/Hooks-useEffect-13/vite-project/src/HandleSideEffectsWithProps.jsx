import { useState } from "react";
import DisplayData from "./DisplayData";

function HandleSideEffectsWithProps() {
  const [primaryValue, setPrimaryValue] = useState(1);
  const [secondaryValue, setSecondaryValue] = useState(5);

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold text-center bg-linear-to-r from-cyan-500 to-blue-500 
                     bg-clip-text text-transparent mb-10">
        React useEffect — Professional Practice Module
      </h1>

      <DisplayData primaryValue={primaryValue} secondaryValue={secondaryValue} />

      <div className="flex justify-center mt-12 gap-6">

        <button
          onClick={() => setPrimaryValue(primaryValue + 1)}
          className="px-8 py-3 rounded-xl text-lg font-semibold bg-blue-600 text-white 
                     hover:bg-blue-700 active:scale-95 shadow-lg transition"
        >
          Increase Primary
        </button>

        <button
          onClick={() => setSecondaryValue(secondaryValue + 1)}
          className="px-8 py-3 rounded-xl text-lg font-semibold bg-pink-600 text-white 
                     hover:bg-pink-700 active:scale-95 shadow-lg transition"
        >
          Increase Secondary
        </button>

      </div>
    </div>
  );
}

export default HandleSideEffectsWithProps;
