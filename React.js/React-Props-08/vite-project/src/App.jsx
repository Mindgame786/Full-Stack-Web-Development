import { useState } from 'react';
import './App.css'
import ArrayWithProps from './ArrayWithProps';
import ObjectData from './ObjectData';
import PropsInReact from './PropsInReact';
import UseStateAsProps from './UseStateAsProps';
import DefaultProps from './DefaultProps';
import PassJsxToProps from './PassJsxToProps';

function App() {

  // Object create by now:

  let Employee1 = {
    Name2: "UMARG",
    Age2: 22,
    Address2: "Umarjutt111jbFaisalabadi"
  }
  let Employee2 = {
    Name2: "Ahamd",
    Age2: 22,
    Address2: "Ahamdjutt111jbFaisalabadi"
  }


  //-------------------------------------------------------------------------------------------------------                                     Array Create With Props -------------------------------------------------------------------------------------------------------

  // Pakistan Provinces Array
  let PK = ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"];

  //-------------------------------------------------------------------------------------------------------



  //-------------------------------------------------------------------------------------------------------                                     UseState As Props -------------------------------------------------------------------------------------------------------

  const [my, setMy] = useState("UMARJUTT");


  // toggle function
  const handleChange = () => {
    setMy(prev => (prev === "UMARJUTT" ? "AhamdJutt" : "UMARJUTT"));
  };

  //-----------------------------------------------------------------------------------------------------


  let Name = "UMATJUtT";
  let Age = 20;
  let Address = "Umarjutt111jbFaisalabad";

  //---------------------------------------------------------
  return (
    <>
      <h1 className='text-4xl font-sans font-bold bg-zinc-50 text-pink-400 rounded-md text-shadow-sm text-shadow-zinc-600  inset-shadow-zinc-400 inset-shadow-sm py-4'>
        React + Vite + Tailwind
      </h1>

      <PropsInReact employeeName={Name} age={Age} address={Address} />

      <hr />

      <ObjectData user={Employee1} />

      <ObjectData user={Employee2} />
      <hr />
      <ArrayWithProps PK={PK} />


      {


        my && <UseStateAsProps my={my} />

      }

      <button className='mb-4 text-white bg-zinc-200   border-zinc-700  mt-4 py-2 px-4 font-sans font-semibold rounded-sm  bg-gradient-to-l from-pink-400 to-teal-400  hover:text-amber-100 hover:bg-gradient-to-t' onClick={() => setMy(my === "UMARJUTT" ? "AhamdJutt" : "UMARJUTT")}>Changer</button>
      <hr />

      <DefaultProps userName="JAmaal" />
      <DefaultProps />
      <hr />

      <PassJsxToProps>
        <div className="border-2 border-gray-600 mt-4 rounded-md w-[22rem] text-left pl-8 pb-6 bg-zinc-50">
          <h1 className="text-gray-600 font-sans font-bold mt-8 text-2xl">Student Card</h1>
          <h2 className="mt-3 text-gray-600 font-sans font-semibold">Student Name : Hassan Ahmad</h2>
          <h2 className="mt-3 text-gray-600 font-sans font-semibold">Father's Name : Ahmad Ali </h2>
          <h2 className="mt-3 text-gray-600 font-sans font-semibold">Class : Nursery Part Two</h2>
          <h2 className="mt-3 text-gray-600 font-sans font-semibold">Roll No : 20</h2>
        </div>

        <div className="border-2 border-gray-600 mt-4 rounded-md w-[22rem] text-left pl-8 pb-6 mb-8 bg-zinc-50">
          <h1 className="text-gray-600 font-sans font-bold mt-8 text-2xl">Student Card</h1>
          <h2 className="mt-3 text-gray-600 font-sans font-semibold">Student Name : Ali Raza</h2>
          <h2 className="mt-3 text-gray-600 font-sans font-semibold">Father's Name : Raza Ahmed </h2>
          <h2 className="mt-3 text-gray-600 font-sans font-semibold">Class : Play Group</h2>
          <h2 className="mt-3 text-gray-600 font-sans font-semibold">Roll No : 21</h2>
        </div>
      </PassJsxToProps>

      <hr />







    </>
  )
}

export default App;