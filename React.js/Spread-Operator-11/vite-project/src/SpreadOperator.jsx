import { li } from "framer-motion/client";

function SpreadOperator() {

  const fruits = ['Apple', 'Banana', 'Orange'];
  const moreFruits = [...fruits, 'Mango', 'Peach', 'Grapes', 'Melon', 'WaterMelon', 'pear'];
  console.log(moreFruits);



  const student = {
    name: "Zain",
    age: 20
  };

  const newStudent = { ...student, class: "12th" };
  console.log(newStudent);


  const BoyStudents = ['Abid', 'Nasir', 'Bilal', 'UMAR', 'Ahmad', 'Asad', 'Faizan'];
  const GirlStudents = ['Sobia', 'Ayesha', 'Marryum', 'Sania', 'Amana', 'Hifza', 'Anya'];
  const Students = [...BoyStudents, ...GirlStudents];





  return (
    <>
      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-green-400 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>
        Spread Operator
      </h1>


      <h2 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-green-400 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>
        List of Students Punjab
      </h2>

      <ul className=" stroke-cyan-500">
        {
          Students.map((student, index) =>
            (<li className=" font-sans list-disc stroke-cyan-500 text-blue-700 text-xl  bg-zinc-100 stroke-1 pl-2 pt-2 font-bold text-left" key={index}>{student}</li>)

          )
        }
      </ul>

    </>
  )
}

export default SpreadOperator;