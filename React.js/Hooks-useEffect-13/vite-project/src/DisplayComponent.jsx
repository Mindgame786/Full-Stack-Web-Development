import { useEffect } from "react";

function DisplayComponent({ number }) {

  // Mounting
  useEffect(() => {
    console.log("📌 Child Mounted");

    return () => {
      console.log("🗑 Child Unmounted");
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log("🔄 Child Updated | New Number:", number);
  }, [number]);

  return (
    <div className="w-[350px] bg-white rounded-2xl p-4 border border-gray-300">

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
        Current Value: {number}
      </h2>
      <p className="text-center text-gray-500">
        Open console to see lifecycle logs
      </p>

      
    </div>
  );
}

export default DisplayComponent;
