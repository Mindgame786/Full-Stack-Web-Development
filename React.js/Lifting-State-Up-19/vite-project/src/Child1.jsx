// import { useState } from "react";

function Child1({setUser}) {

  // const [user,setUser]=useState('');

  return (
    <>


      <h1 className='text-4xl mt-4 mx-2 text-center font-sans font-bold bg-zinc-50 text-green-400 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>
   
        Register New User
   
      </h1>


      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter New User" className=" ml-10 mt-6 mb-8 border-gray-700 border-2 py-2 pl-2 rounded-sm"/>

      <h2 className='text-4xl mt-4 mx-2 text-center font-sans font-bold bg-zinc-50 text-sky-400 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>
   
       {setUser}
   
      </h2>


      
      
    </>
  )
}

export default Child1;