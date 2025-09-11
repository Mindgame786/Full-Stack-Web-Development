import { useState } from "react";

function NumberToWords() {


  const [number, setNumber] = useState(0);
  return (
    <>
      <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>Numbers To Words</h1>


      <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>{number}</h1>

      <button onClick={() => setNumber(number + 1)} className="font-[900] font-sans text-blue-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-2 mt-4 text-left pl-4 pr-4 inset-shadow-sm inset-shadow-zinc-400">Plus</button>
      <button onClick={() => setNumber(number - 1)} className="font-[900] font-sans text-yellow-300 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-2 mt-4 text-left pl-4 pr-4 ml-2 inset-shadow-sm inset-shadow-zinc-400">Minus</button>
      <button onClick={() => setNumber(0)} className="font-[900] font-sans text-red-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-2 mt-4 text-left pl-4 pr-4 ml-2 inset-shadow-sm inset-shadow-zinc-400 ">Rest</button>



      <h2 className='font-[900] font-sans  text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>Range (0 to 10)</h2>


      {
        number == 0 ? <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>Zero</h1>

          : number == 1 ? <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>One</h1>

            : number == 2 ? <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>Two</h1>

              : number == 3 ? <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>Three</h1>

                : number == 4 ? <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>Four</h1>

                  : number == 5 ? <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>Five</h1>

                    : number == 6 ? <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>Six</h1>

                      : number == 7 ? <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>Seven</h1>

                        : number == 8 ? <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>Eight</h1>

                          : number == 9 ? <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>Nine</h1>

                            : number == 10 ? <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>Ten</h1>
                              : <h1 className='font-[900] font-sans text-zinc-400 text-shadow-lg/20 text-4xl bg-zinc-100 rounded-md py-4 mt-4 text-left pl-8'>No Range</h1>

      }







    </>
  )
}

export default NumberToWords;