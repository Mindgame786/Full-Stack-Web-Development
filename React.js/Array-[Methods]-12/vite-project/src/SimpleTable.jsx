import CardsTable from "./CardsTable";

function TableArrays() {
  const headings = ["ID", "Name", "Age", "Salary", "Email"];

  const employees = [
    { id: "1", name: "UMARJUTT", age: "20", salary: "50000", email: "umarjutt@gmail.com" },
    { id: "2", name: "ZAHID", age: "22", salary: "30000", email: "zahid@gmail.com" },
    { id: "3", name: "AHMAD", age: "19", salary: "39000", email: "ahmad@gmail.com" },
    { id: "4", name: "BILAL", age: "24", salary: "45000", email: "bilal@gmail.com" },
    { id: "5", name: "IMRAN", age: "29", salary: "76000", email: "imran@gmail.com" },];


  return (
    <div className="p-6">

      <h1 className="text-4xl mt-4 font-sans font-bold bg-zinc-50 text-orange-400 rounded-md shadow-sm py-4 text-center mb-4">
        Table Using Tailwindcss
      </h1>


      <table className="w-full border rounded-lg shadow">


        <thead className="bg-gray-100 text-gray-700">
          <tr>

            {headings.map(h => <th key={h} className="px-4 py-2 border">
              {h}
            </th>)}

          </tr>
        </thead>


        <tbody>
          {
            employees.map((e, i) => (
              <tr key={e.id} className={i % 2 ? "bg-gray-50" : "bg-white"}>

                <td className="px-4 py-2 border text-center">{e.id}</td>
                <td className="px-4 py-2 border text-center">{e.name}</td>
                <td className="px-4 py-2 border text-center">{e.age}</td>
                <td className="px-4 py-2 border text-center">{e.salary}</td>
                <td className="px-4 py-2 border text-center">{e.email}</td>

              </tr>
            ))

          }
        </tbody>


      </table>
    </div>
  );
}

export default TableArrays;
