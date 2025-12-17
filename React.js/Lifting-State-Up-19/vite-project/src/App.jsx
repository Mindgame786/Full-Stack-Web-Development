import './App.css'
import Child1 from './Child1';
import Child2 from './Child2';
// import Child3 from './Child3';
import { useState } from "react";


function App() {

   const [user,setUser]=useState('');

  return (
    <>
      <h1 className='text-4xl text-center mt-2 mx-2 font-sans font-bold bg-zinc-50 text-pink-400 rounded-md text-shadow-sm text-shadow-zinc-600 inset-shadow-zinc-300 inset-shadow-sm py-4'> 

      React + Vite + Tailwind 

      </h1>
      
      <Child1 setUser={setUser}/>
      <Child2 user={user}/>
      {/* <Child3/> */}
      
    </>
  )
}

export default App;