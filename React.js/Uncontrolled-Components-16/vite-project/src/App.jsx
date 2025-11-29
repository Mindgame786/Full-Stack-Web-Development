import './App.css'
// import Uncontroll from './Uncontroll'
import ControlvsUncontrol from './controlvsUncontrol'
import ParentComponent from "./ParentComponent";
import ForwardParent from "./ForwardParent";  // ✔ dash نہیں ہوگا



function App() {
  return (
    <>
      <h1 className='text-4xl text-center mx-2 mt-4 font-sans font-bold bg-zinc-50 text-pink-400 rounded-md text-shadow-sm text-shadow-zinc-600 inset-shadow-zinc-300 inset-shadow-sm py-4'>
        React + Vite + Tailwind
      </h1>
      <ControlvsUncontrol />
      <ParentComponent />
      <ForwardParent />

      {/* <Uncontroll /> */}

      {/* ForwardRef example */}

      {/* same component second time render if you want */}
    
      
     
    </>
  )
}

export default App;
