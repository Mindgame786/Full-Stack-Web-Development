import './App.css'
import Assignment from './Assignment-01'
import StateInReact from './State-React-01'
import StateReact from './State-React-02'

function App() {
  return (
    <>
      <h1 className='bg-amber-200 text-red-400 text-2xl font-medium font-sans'>Welcome to Home</h1>
      <StateInReact />
      <StateReact />
      <Assignment />
    </>
  )
}

export default App