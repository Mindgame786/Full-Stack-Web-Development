import  { forwardRef } from "react";

// ✅ forwardRef کے ذریعے parent کو child input تک رسائی
const ChildComponent = forwardRef((props,ref) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Child Component
      </h2>
      {/* ✅ Parent ref directly input پر attach */}
      <input
        ref={ref}
        type="text"
        placeholder="یہاں لکھیں..."
        className="border p-2 rounded w-64"
      />
    </div>
  );
});

export default  ChildComponent;
