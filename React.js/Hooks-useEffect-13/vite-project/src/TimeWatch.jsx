function TimeWatch() {

  const currentDate = new Date();
  const day=currentDate.getDate();
  const month=currentDate.getMonth()+1;
  const year=currentDate.getFullYear();




  return (
    <>
      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-violet-400 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>
        Data & Time
      </h1>

      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-lime-400 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>
        {currentDate.toString()}
      </h1>

      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-blue-500 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>
        {currentDate.toDateString()}
      </h1>

      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-blue-500 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>
        {currentDate.toTimeString()}
      </h1>
      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-green-400 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>Local Date :
        {currentDate.toLocaleDateString()}
      </h1>
      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-green-500 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>Local Time :
        {currentDate.toLocaleTimeString()}
      </h1>

      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-blue-500 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>Day :
        { day}
      </h1>
      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-blue-500 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>Month :
        { month}
      </h1>
      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-blue-500 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>Year :
        { year}
      </h1>
     



      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-red-500 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>Date :
        { day}/{month}/{year}
      </h1>






      
    </>
  )
}

export default TimeWatch;