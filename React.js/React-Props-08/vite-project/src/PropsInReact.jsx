function PropsInReact({ employeeName, age, address }) {


  return (
    <div className="mb-4">

      <h1 className='text-4xl font-sans font-bold bg-zinc-50 text-emerald-400 rounded-md text-shadow-sm text-shadow-zinc-600   py-2 mt-8 mb-4'>Props In React</h1>



      <h1 className='text-3xl font-sans font-semibold text-zinc-300 rounded-md text-shadow-sm text-shadow-zinc-600  mt-4   py-2 mb-4'>Name : {employeeName}</h1>


      <h1 className='text-3xl font-sans font-semibold text-zinc-300 rounded-md text-shadow-sm text-shadow-zinc-600    py-2 mb-4'>Age : {age}</h1>


      <h1 className='text-3xl font-sans font-semibold text-zinc-300 rounded-md text-shadow-sm text-shadow-zinc-600    py-2 mb-8'>Address : {address}</h1>




    </div>

  )
}

export default PropsInReact;