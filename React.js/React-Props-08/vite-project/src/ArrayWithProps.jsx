function ArrayWithProps({ PK }) {
  return (
    <>
      <h1 className='text-4xl font-sans font-bold bg-zinc-50 text-lime-400 rounded-md text-shadow-sm text-shadow-zinc-600   py-2 mt-8'>Passing Array With Props</h1>


      <h2 className='text-3xl font-sans font-semibold text-zinc-300 py-2  text-shadow-sm text-shadow-zinc-600'>
        Provinces : {PK[0]}

      </h2>
      <h2 className='text-3xl font-sans font-semibold text-zinc-300 py-2  text-shadow-sm text-shadow-zinc-600'>
        Provinces : {PK[1]}
      </h2>

      <h2 className='text-3xl font-sans font-semibold text-zinc-300 py-2  text-shadow-sm text-shadow-zinc-600'>
        Provinces : {PK[2]}
      </h2>

      <h2 className='text-3xl font-sans font-semibold text-zinc-300 py-2  text-shadow-sm text-shadow-zinc-600 mb-4'>
        Provinces : {PK[3]}
      </h2>
      <hr />

    </>
  )
}

export default ArrayWithProps;