import { useEffect, useState } from "react";

function DisplayData({ primaryValue, secondaryValue }) {
  const [highlightPrimary, setHighlightPrimary] = useState(false);
  const [highlightSecondary, setHighlightSecondary] = useState(false);

  // Effect when Primary Value changes
  const triggerPrimaryEffect = () => {
    console.log("Primary value updated");
  };

  // Effect when Secondary Value changes
  const triggerSecondaryEffect = () => {
    console.log("Secondary value updated");
  };

  // useEffect for Secondary Value
  useEffect(() => {
    triggerSecondaryEffect();
    setHighlightSecondary(true);

    const timeout = setTimeout(() => setHighlightSecondary(false), 500);
    return () => clearTimeout(timeout);
  }, [secondaryValue]);

  // useEffect for Primary Value
  useEffect(() => {
    triggerPrimaryEffect();
    setHighlightPrimary(true);

    const timeout = setTimeout(() => setHighlightPrimary(false), 500);
    return () => clearTimeout(timeout);
  }, [primaryValue]);

  return (
    <div className="mt-8 w-full max-w-3xl mx-auto p-8 bg-white/90 backdrop-blur-xl 
                    rounded-3xl shadow-xl shadow-black/10 border border-zinc-200">

      <h2 className="text-3xl font-bold text-center bg-linear-to-r from-blue-600 to-pink-500 
                     bg-clip-text text-transparent tracking-wide mb-10">
        useEffect Dependency Visualizer
      </h2>

      {/* PRIMARY */}
      <div
        className={`p-6 rounded-2xl border transition-all duration-500 shadow 
        ${highlightPrimary
          ? "bg-blue-100 border-blue-400 shadow-blue-300 scale-[1.04]"
          : "bg-blue-50 border-blue-200"
        }`}
      >
        <h3 className="text-xl font-semibold text-blue-700">Primary Value</h3>
        <p className="text-5xl font-extrabold text-blue-600 mt-2">
          {primaryValue}
        </p>
      </div>

      {/* SECONDARY */}
      <div
        className={`p-6 rounded-2xl border transition-all duration-500 shadow mt-8
        ${highlightSecondary
          ? "bg-pink-100 border-pink-400 shadow-pink-300 scale-[1.04]"
          : "bg-pink-50 border-pink-200"
        }`}
      >
        <h3 className="text-xl font-semibold text-pink-700">Secondary Value</h3>
        <p className="text-5xl font-extrabold text-pink-600 mt-2">
          {secondaryValue}
        </p>
      </div>

    </div>
  );
}

export default DisplayData;
