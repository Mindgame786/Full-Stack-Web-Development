

function ChildComponent(props) {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Child Component
      </h2>
      {/* ✅ Button click پر parent function call کرنا */}
      <button
        onClick={() => props.greet("عمر")}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Parent Function Call کریں
      </button>
    </div>
  );
}

export default ChildComponent;



