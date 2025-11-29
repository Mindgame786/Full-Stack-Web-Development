import { useState, useRef } from "react";

function App() {
  // Controlled
  const [controlledName, setControlledName] = useState("");
  const [controlledEmail, setControlledEmail] = useState("");



  // Uncontrolled
  const uncontrolledNameRef = useRef(null);
  const uncontrolledEmailRef = useRef(null);

  const handleSubmit = () => {
    console.log("Controlled Name:", controlledName);
    console.log("Controlled Email:", controlledEmail);

    console.log("Uncontrolled Name:", uncontrolledNameRef.current.value);
    console.log("Uncontrolled Email:", uncontrolledEmailRef.current.value);

    // Clear fields
    setControlledName("");
    setControlledEmail("");
    uncontrolledNameRef.current.value = "";
    uncontrolledEmailRef.current.value = "";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-8">
      <h1 className="text-3xl font-bold text-pink-500">Controlled vs Uncontrolled Inputs</h1>

      {/* Controlled Inputs */}
      <div className="flex flex-col space-y-4 w-80 p-4 bg-white rounded shadow">
        <h2 className="font-semibold text-lg">Controlled Inputs</h2>
        <input
          type="text"
          value={controlledName}
          onChange={(e) => setControlledName(e.target.value)}
          placeholder="Name"
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />


        <input
          type="email"
          value={controlledEmail}
          onChange={(e) => setControlledEmail(e.target.value)}
          placeholder="Email"
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>





      {/* Uncontrolled Inputs */}
      <div className="flex flex-col space-y-4 w-80 p-4 bg-white rounded shadow">
        <h2 className="font-semibold text-lg">Uncontrolled Inputs</h2>
        <input
          type="text"
          ref={uncontrolledNameRef}
          placeholder="Name"
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="email"
          ref={uncontrolledEmailRef}
          placeholder="Email"
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
      >
        Submit
      </button>
    </div>
  );
}

export default App;
