function PassJsxToProps({ children }) {
  return (
    <>
      <div>
        <h1 className='text-4xl font-sans font-bold bg-zinc-50 text-amber-300 rounded-md text-shadow-sm text-shadow-zinc-600   py-2 mt-8 mb-4'>Pass Jsx to Props through any Value</h1>

      </div>



      {/* Flex column + Center horizontally */}
      <div className="flex flex-col items-center text-yellow-300 bg-zinc-100">
        {children}
      </div>


      {/* <div className="border-2 border-gray-500 rounded-md w-90 pb-6 text-left pl-6 mt-4 ">
        {children}

      </div> */}


    </>
  )
}

export default PassJsxToProps;