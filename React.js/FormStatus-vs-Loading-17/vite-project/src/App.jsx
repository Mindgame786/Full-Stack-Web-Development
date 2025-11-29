import './App.css'
import Page from './FormData'
import ProForm from './ProForm';

function App() {
  return (
    <>
      <h1 className='text-4xl font-sans text-center mx-2 mt-2 font-bold bg-zinc-50 text-pink-400 rounded-md text-shadow-sm text-shadow-zinc-600 inset-shadow-zinc-300 inset-shadow-sm py-4'>
        React + Vite + Tailwind
      </h1>
      <Page/>
      <ProForm/>
    </>
  )
}

export default App;