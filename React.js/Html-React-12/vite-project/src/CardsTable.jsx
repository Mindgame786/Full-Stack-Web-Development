import { div, h2 } from "framer-motion/client";
import PropsCards from "./PropsCards";

function CardsTable() {

  const employees = [
    { id: "1", name: "UMARJUTT", age: "20", salary: "50000", email: "umarjutt@gmail.com" },
    { id: "2", name: "ZAHID", age: "22", salary: "30000", email: "zahid@gmail.com" },
    { id: "3", name: "AHMAD", age: "19", salary: "39000", email: "ahmad@gmail.com" },
    { id: "4", name: "BILAL", age: "24", salary: "45000", email: "bilal@gmail.com" },
    { id: "5", name: "IMRAN", age: "29", salary: "76000", email: "imran@gmail.com" },];



  return (
    <>
      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-green-400 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>
        Array Data With Props
      </h1>



      {
        employees.map((user) => (
          <div key={user.id}>
            <PropsCards data={user} />
          </div>
        ))
      }

    </>
  )
}

export default CardsTable;