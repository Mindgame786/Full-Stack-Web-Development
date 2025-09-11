import './App.css'
import CompFun, { Laptop, Myapp } from './CompFun'
import JsCode from './JsCode'
import MyLife from './MyLife'


function App() {

  return (
    <>


      <Myapp />
      <h1 className='text-center text-2xl bg-pink-400 font-bold py-2 text-white font-sans'>Learn React</h1>
      <CompFun />
      {Laptop}
      <MyLife />
      <JsCode />


    </>
  )
}

export default App
