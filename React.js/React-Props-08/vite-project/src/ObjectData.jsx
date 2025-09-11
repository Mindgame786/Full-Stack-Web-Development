function ObjectData({ user }) {
  return (
    <div className="mb-4">

      <h1 className='text-4xl font-sans font-bold bg-zinc-50 text-amber-300 rounded-md text-shadow-sm text-shadow-zinc-600   py-2 mt-8 mb-4'>Object and Props</h1>

      <h1 className='text-3xl font-sans font-semibold text-zinc-300 mt-4 py-2  text-shadow-sm text-shadow-zinc-600'>
        Name : {user.Name2}
      </h1>

      <h1 className='text-3xl font-sans font-semibold text-zinc-300 py-2  text-shadow-sm text-shadow-zinc-600'>
        Age : {user.Age2}
      </h1>

      <h1 className='text-3xl font-sans font-semibold text-zinc-300 py-2  text-shadow-sm text-shadow-zinc-600'>
        Address : {user.Address2}
      </h1>


    </div>
  )
}

export default ObjectData;
