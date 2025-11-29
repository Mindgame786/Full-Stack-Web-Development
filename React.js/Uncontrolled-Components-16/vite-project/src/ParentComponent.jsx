import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  // ✅ Parent کا function
  const showMessage = (name) => {
    alert(`ہیلو، ${name}! یہ parent کا function ہے۔`);
  };

  return (
    <div className="flex mt-4 flex-col items-center justify-center min-h-screen bg-rose-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Parent Component
      </h1>
      {/* ✅ Child کو function props کے طور پر دینا */}
      <ChildComponent greet={showMessage} />
    </div>
  );
}

export default ParentComponent;
