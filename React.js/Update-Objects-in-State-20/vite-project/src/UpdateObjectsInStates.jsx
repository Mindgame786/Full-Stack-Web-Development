import { useState } from "react";

function UpdateObjectsInStates() {
  const [user, setUser] = useState({
    Name: "UMAR JUTT",
    Address: {
      city: "Lahore",
      country: "Pakistan"
    }
  });



  //-----------------------------------------------------------------------------



  // const updateName = (value) => {

  //   setUser( 

  //      function (prev) {
  //     return { ...prev, Name: value };
  //   }
  // );


  // };





  const updateName = (val) => {

    setUser(prev => ({ ...prev, Name: val }));

  };




  const updateCity = (city) => {
    setUser(prev => ({ ...prev, Address: { ...prev.Address, city } }));
  };


  const updateCountry = (country) => {
    setUser(prev => ({ ...prev, Address: { ...prev.Address, country } }));
  };

  //-------------------------------------------------------------------------------


  return (
    <div className="max-w-md mx-auto mt-6 space-y-4">

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name..."
          value={user.Name}
          onChange={(e) => updateName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-blue-500 transition duration-200
                     placeholder-gray-400 text-gray-900
                     disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
          City
        </label>
        <input
          id="city"
          type="text"
          placeholder="Enter your city..."
          value={user.Address.city}
          onChange={(e) => updateCity(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-blue-500 transition duration-200
                     placeholder-gray-400 text-gray-900
                     disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
          Country
        </label>
        <input
          id="country"
          type="text"
          placeholder="Enter your country..."
          value={user.Address.country}
          onChange={(e) => updateCountry(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-blue-500 transition duration-200
                     placeholder-gray-400 text-gray-900
                     disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      <h3 className="text-2xl font-bold font-sans text-sky-600">
        Name: {user.Name}
      </h3>

      <h4 className="text-2xl font-bold font-sans text-sky-600">
        City: {user.Address.city}
      </h4>

      <h5 className="text-2xl font-bold font-sans text-sky-600">
        Country: {user.Address.country}
      </h5>


    </div>
  );
}

export default UpdateObjectsInStates;
