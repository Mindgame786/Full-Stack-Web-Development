function EventFunctions() {

  function myfunction() {
    alert("This is my Function");
  }


  const ArrowFunction = (ArrowName) => {
    return (
      alert(ArrowName)
    )
  }

  return (
    <>
      <h1 className='text-blue-600 font-bold text-4xl py-2 bg-cyan-300 text-center'>Event Call in React</h1>


      <button className="bg-red-400 text-white   hover:bg-red-500 text-center py-2 px-4 ml-160 mt-4 rounded-lg font-sans text-2xl hover:text-shadow-amber-100 " onClick={() => ArrowFunction("Faisalabad")}>Faisalabad</button>


      <button className="bg-amber-300 text-white   hover:bg-amber-400 text-center py-2 px-9 ml-160 mt-4 rounded-lg font-sans text-2xl hover:text-shadow-amber-100 " onClick={() => ArrowFunction("Lahore")}>Lahore</button>


      <button className="bg-blue-700 text-white   hover:bg-blue-800 text-center py-2 px-8 ml-160 mt-4 rounded-lg font-sans text-2xl hover:text-shadow-amber-100 " onClick={() => ArrowFunction("Karachi")}>Karachi</button>

    </>
  )
}

export default EventFunctions;