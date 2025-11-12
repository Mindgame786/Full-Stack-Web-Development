import { email } from "zod";
import { id } from "zod/locales";

function TableArrays() {


  // const empIfo = ['UMAR','YASIR','AHMAD','BILAL',"ZAHID",'IMRAN'];
  const empIfo = [
    {
      id: '1',
      name: 'UMARJUTT',
      age: '20',
      salary: '50000',
      email: 'umarjutt@gmail.com'
    },
    {
      id: '2',
      name: 'ZAHID',
      age: '22',
      salary: '30000',
      email: 'zahid@gmail.com'
    },
    {
      id: '3',
      name: 'AHMAD',
      age: '19',
      salary: '39000',
      email: 'ahmad@gmail.com'
    },
    {
      id: '4',
      name: 'BILAL',
      age: '24',
      salary: '45000',
      email: 'bilal@gmail.com'
    },
    {
      id: '5',
      name: 'IMRAN',
      age: '29',
      salary: '76000',
      email: 'imran@gmail.com'
    },

  ]




  return (
    <>
      <h1 className='text-4xl mt-4 font-sans font-bold bg-zinc-50 text-orange-400 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>
        Table Arrays
      </h1>

      <table className="border-2 border-gray-600 ">

        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>AGE</td>
            <td>SALARY</td>
            <td>EMAIL</td>
          </tr>
        </thead>

        <tbody>


          {
            empIfo.map((user) => (

              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.salary}</td>
                <td>{user.email}</td>
              </tr>


            ))
          }

        </tbody>




      </table >

    </>
  )
}

export default TableArrays;