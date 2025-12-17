import { useState } from "react";

function UpdateArrayInState() {
  const [cities, setCities] = useState([
    "Faisalabad",
    "Karachi",
    "Lahore",
    "Islamabad",
  ]);
  const [cityInput, setCityInput] = useState(""); // Input value

  // Add new city
  const addCity = () => {
    if (cityInput.trim() === "") return;
    setCities([...cities, cityInput]);
    setCityInput("");
  };

  // Update last city
  const updateLastCity = () => {
    if (cityInput.trim() === "") return;
    setCities((prevCities) => {
      // Functional update (professional way)
      return prevCities.map((city, index) =>
        index === prevCities.length - 1 ? cityInput : city
      );
    });
    setCityInput(""); // Clear input after update
  };

  return (
    <>
      <h1 className="text-4xl mt-4 text-center mx-2 font-sans font-bold bg-zinc-50 text-sky-400 rounded-md text-shadow-sm text-shadow-zinc-600 py-4">
        Update Last City in Array State
      </h1>

      {/* Input box */}
      <div className="text-center mt-4 space-x-2">
        <input
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="Enter city"
          className="border px-3 py-2 rounded"
        />
        <button
          onClick={addCity}
          className="px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-500 transition"
        >
          Add City
        </button>
        <button
          onClick={updateLastCity}
          className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-500 transition"
        >
          Update Last City
        </button>
      </div>

      {/* Cities List */}
      <ul className="mt-4 text-center space-y-2">
        {cities.map((city, index) => (
          <li key={index} className="text-lg">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UpdateArrayInState;
