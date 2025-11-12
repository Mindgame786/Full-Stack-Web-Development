import { useState } from "react";

// Professional Button Component

const Button = ({ name, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-3 rounded-2xl font-semibold transition-transform duration-300 transform
      ${selected
        ? "bg-blue-400 text-teal-50 scale-105"
        : "bg-gray-100 text-gray-700 border border-gray-100 hover:bg-cyan-100 hover:scale-105"
      }
    `}
  >
    {name}
  </button>
);

// Professional Select Dropdown
const SelectDropdown = ({ value, onChange, options }) => (
  <select
    value={value}
    onChange={onChange}
    className="
      w-full px-4 py-3 rounded-2xl bg-white border border-gray-300 text-gray-800 text-base font-medium  
      focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all duration-300
    "
  >
    {options.map((opt, index) => (
      <option key={index} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

export default function WithAISelectCityGender() {
  const [gender, setGender] = useState("Male");
  const [city, setCity] = useState("Karachi");

  const genders = ["Male", "Female"];
  const cities = [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan",
    "Sialkot", "Quetta", "Peshawar", "Hyderabad", "Gujranwala", "Bahawalpur",
    "Sukkur", "Mardan", "Abbottabad"
  ];

  return (
    <div className="min-h-screen flex items-center mt-8 justify-center bg-zinc-100 p-4">
      <div className="w-full max-w-2xl py-8 p-8 bg-white rounded-3xl ">

        {/* Header */}
        <div className="bg-zinc-50 inset-shadow-amber-500 inset-20 rounded-xl py-4 mb-10 text-center">
          <h1 className="text-2xl md:text-3xl   font-bold  text-amber-300 text-shadow-gray-800 text-shadow-2xs">
            Select Your Gender & City
          </h1>
        </div>

        {/* Gender Section */}
        <div className="mb-10">
          <h2 className="text-xl font-serif md:text-2xl p-2 py-3 text-gray-500  font-bold  mb-5  text-left">

          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {genders.map((g) => (
              <Button
                key={g}
                name={g}
                selected={gender === g}
                onClick={() => setGender(g)}
              />
            ))}
          </div>
          <p className="mt-4 text-gray-700 text-center text-sm md:text-base">
            Selected Gender: <span className="font-semibold text-cyan-300">{gender}</span>
          </p>
        </div>

        {/* City Section */}
        <div className="mb-10">
          <h2 className="text-xl font-serif md:text-2xl font-bold mb-5 text-zinc-600 text-left">

          </h2>
          <div className="max-w-md mx-auto">
            <SelectDropdown
              value={city}
              onChange={(e) => setCity(e.target.value)}
              options={cities}
            />
          </div>
          <p className="mt-4 text-gray-700 text-center text-sm md:text-base">
            Selected City: <span className="font-semibold text-cyan-400">{city}</span>
          </p>
        </div>



      </div>
    </div>
  );
}
