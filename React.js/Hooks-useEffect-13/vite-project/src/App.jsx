import './App.css'
import Clock from './Clock';
import DropDowns from './DropDowns';
import HandleSideEffectsWithProps from './HandleSideEffectsWithProps';
import LifeCycle from './LifeCycle';
import TimeWatch from './TimeWatch';
import USeEffect from './USeEffect';


function App() {
  return (
    <>
      <h1 className='text-4xl font-sans font-bold bg-zinc-50 text-pink-400 rounded-md text-shadow-sm text-shadow-zinc-600 inset-shadow-zinc-300 inset-shadow-sm py-4'>
        React + Vite + Tailwind
      </h1>

      <USeEffect />
      <TimeWatch/>
      <Clock/>
      <DropDowns/>
      <HandleSideEffectsWithProps/>
      <LifeCycle/>








    </>
  )
}

export default App;