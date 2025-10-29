import { useState } from "react";

export default function GetDataCheckBox() {
  const [hobbies, setHobbies] = useState(['Music']);

  const handleHobbyChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((item) => item !== value));
    }
  };

  const hobbyOptions = ["Cooking", "Music", "Gaming", "Sports", "Traveling", "Loving", "Reading"];




  return (
    <div className="min-h-screen flex flex-col items-center mt-4 justify-start bg-gradient-to-br from-teal-50 via-green-50 to-teal-100 p-6">


      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 text-center">
        How To Get Data From Check Box in React?
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-cyan-600 mb-4 text-center">
        Select Your Hobbies
      </h2>


      {/* Here Start From Main Coding */}

      {/* Checkbox Card */}
      <div className="bg-gradient-to-bl from-green-200 to-teal-200 p-6 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4">


        {hobbyOptions.map((hobby) => (
          <label key={hobby} className="flex items-center gap-3 font-medium text-gray-800 text-lg cursor-pointer">
            <input
              type="checkbox"
              value={hobby}
              checked={hobbies.includes(hobby)}
              onChange={handleHobbyChange}
              className="w-5 h-5 accent-teal-500"
            />
            {hobby}
          </label>
        ))}

        {/* Selected Hobbies */}

        {hobbies.length > 0 && (
          <div className="mt-4 p-3 bg-white rounded-xl shadow-inner text-teal-700 font-semibold text-lg">
            Selected: {hobbies.join(", ")}
          </div>
        )}
      </div>
    </div>
  );
}
