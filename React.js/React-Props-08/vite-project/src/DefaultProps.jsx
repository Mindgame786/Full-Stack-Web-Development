function DefaultProps({ userName = "Guest As a Name" }) {
  return (
    <>
      <h1 className='text-4xl font-sans font-bold bg-zinc-50 text-orange-400 rounded-md text-shadow-sm text-shadow-zinc-600   py-2 mt-8'>Default Props Pass</h1>

      <h2 className='text-3xl font-sans font-semibold text-zinc-300 rounded-md text-shadow-sm text-shadow-zinc-600  mt-4   py-2 mb-4'>Hello! : {userName}</h2>


    </>
  )
}

export default DefaultProps;