import React from 'react'

const UseStateAsProps = ({ my }) => {
  return (
    <div>
      <h1 className='text-4xl font-sans font-bold bg-zinc-50 text-indigo-500 rounded-md text-shadow-sm text-shadow-zinc-600   py-2 mt-8'>UseState Passing Through Props</h1>


      <h1 className='text-3xl font-sans font-semibold text-zinc-300 rounded-md text-shadow-sm text-shadow-zinc-600  mt-4   py-2'>Name : {my}</h1>


    </div>
  )
}

export default UseStateAsProps