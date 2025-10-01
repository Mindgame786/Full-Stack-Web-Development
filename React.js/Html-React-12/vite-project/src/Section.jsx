import { useState } from "react";

function SectionData() {

  const [gender, setGender] = useState("Female");
  const [city, setCity] = useState("Karachi");
  //--------------------------------------------------------------------------------------------------------

  const Cities = ["Multan", "Lahore", "Karachi", "Faisalabad", "Islamabad", "Khyper Pakhtykhan", "Boluchitan"];
  const Gender = ["Male", "Female"];









  return (
    <>
      <h1 className="text-4xl mt-4 font-sans font-bold bg-zinc-50 text-green-400 rounded-md text-shadow-sm text-shadow-zinc-600 py-4">
        Radio Button & Dropdown Menu
      </h1>



      <h2 className="text-lg font-medium">Select Gender</h2>


      <div className="space-x-4 mt-2">
        {/* <input
          type="radio"
          name="Gender"
          id="Male"
          value="Male"
          checked={gender === "Male"}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="Male">Male</label>

        <input
          type="radio"
          name="Gender"
          id="Female"
          value="Female"
          checked={gender === "Female"}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="Female">Female</label> */}
        {/* --------------------------------------------------------------------------- */}


        {Gender.map((genderName2, index) => {
          return (

            <span key={index}>
              <input
                type="radio"
                name="Gender2"
                id={genderName2}
                value={genderName2}
                checked={gender === genderName2}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor={genderName2} className="ml-1">
                {genderName2}
              </label>
            </span>
          )
        })}


      </div>


      <h3 className="font-bold font-serif mt-3 text-gray-600" >
        Selected Gender: <span className="text-blue-600">{gender}</span>
      </h3>


      <div>
        <h3>Select City</h3>
        <select name="" id="" defaultValue={'Karachi'} className="border-2 border-gray-600 rounded-sm font-bold" onChange={(event) => setCity(event.target.value)}>

          {/* <option value="Karachi">Karachi</option>
          <option value="Faisalabad">Faisalabad</option>
          <option value="Multan">Multan</option>
          <option value="Lahore">Lahore</option>
          <option value="Quetta">Quetta</option> */}

          {/*--------------------------------------------------------------------------- */}


          {Cities.map((cityName, index) => (
            <option key={index} value={cityName}>{cityName}</option>
          ))}

          {/* ---------------------------------------------------------------------------------------- */}



        </select>

        <p className="font-bold text-green-400 font-sans">Selected City:  <span className="text-blue-700 font-medium font-sans">{city}</span> </p>
      </div>
    </>
  );
}

export default SectionData;
