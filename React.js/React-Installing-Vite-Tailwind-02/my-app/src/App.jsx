import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Logos */}
      <div className="flex gap-10 mb-8">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="w-32 h-32 hover:drop-shadow-[0_0_20px_#646cffaa] transition animate-bounce"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            alt="React logo"
            className="w-32 h-32 hover:drop-shadow-[0_0_20px_#61dafbaa] transition animate-spin"
          />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Vite + React + Tailwind</h1>

      {/* Card */}
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 bg-blue-400 rounded-lg hover:bg-blue-700 transition animate-bounce"        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-300">
          Edit <code className="text-yellow-400">src/App.jsx</code> and save to
          test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
