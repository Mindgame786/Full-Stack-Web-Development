import { useState } from "react";

// Most USe using  Array in this project...

function GetDataRadioDropDown() {
  const [gender, setGender] = useState("Male");
  const [city, setCity] = useState("Lahore");

  const cities = ["Lahore", "Karachi", "Quetta", "Faisalabad", "Peshawar", "Islamabad"];
  const genders = ["Male", "Female"];





  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-gray-50 to-gray-100 p-6 mt-4 rounded-2">



      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 border border-gray-200">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-heading font-sans font-bold text-gray-800 text-center mb-8">
          Select Your Preferences
        </h1>




        {/* Gender Section */}


        <div className="mb-8">

          <h2 className="text-xl font-heading text-gray-700 mb-4">Select Gender</h2>

          <div className="flex gap-8 pl-2">

            {genders.map((Option) => (

              <label key={Option} className="flex items-center gap-2 text-gray-700 font-sans cursor-pointer hover:text-blue-600 transition">

                <input
                  type="radio"
                  name="M"
                  value={Option}
                  checked={gender === Option}
                  onChange={(event) => setGender(event.target.value)}
                  className="accent-blue-500 w-5 h-5" />

                <span>
                  {Option}
                </span>


              </label>
            ))}

          </div>



          <p className="mt-3 text-gray-600 text-sm">
            Selected Gender: <span className="font-semibold text-blue-600">{gender}</span>
          </p>


        </div>



        {/* City Section */}

        <div>


          <h2 className="text-xl font-heading text-gray-700 mb-4">Select City</h2>

          <select value={city}
            onChange={(event) => setCity(event.target.value)}
            className="w-full p-3 font-semibold rounded-lg border border-gray-300 bg-white text-gray-700 font-sans focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm transition">



            {cities.map((Pak) => (

              <option key={Pak} value={Pak}>
                {Pak}
              </option>

            ))}

          </select>


          <p className="mt-3 text-gray-600 text-sm font-normal">
            Selected City :
            <span className="font-semibold text-green-600">{city}</span>

          </p>


        </div>



      </div>
    </div>
  );
}

export default GetDataRadioDropDown;
