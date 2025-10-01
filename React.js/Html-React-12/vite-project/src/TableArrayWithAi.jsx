import { useState } from "react";

function TableArrays() {
  const empIfo = [
    { id: "1", name: "UMARJUTT", age: "20", salary: "50000", email: "umarjutt@gmail.com" },
    { id: "2", name: "ZAHID", age: "22", salary: "30000", email: "zahid@gmail.com" },
    { id: "3", name: "AHMAD", age: "19", salary: "39000", email: "ahmad@gmail.com" },
    { id: "4", name: "BILAL", age: "24", salary: "45000", email: "bilal@gmail.com" },
    { id: "5", name: "IMRAN", age: "29", salary: "76000", email: "imran@gmail.com" },
  ];


  // search & sort states
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("none");

  // filter by search
  let filteredData = empIfo.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  // sort data
  if (sortType === "name") {
    filteredData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));

  } else if (sortType === "salary") {
    filteredData = [...filteredData].sort((a, b) => b.salary - a.salary);
  }

  return (
    <>
      <h1 className="text-4xl mt-4 font-sans font-bold bg-zinc-50 text-orange-400 rounded-md shadow-sm py-4 text-center">
        Array Data in Table Using map 2
      </h1>

      {/* Search & Sort Controls */}
      <div className="flex justify-between items-center my-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded-md w-1/2"
        />

        <select
          className="border px-3 py-2 rounded-md"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="none">No Sort</option>
          <option value="name">Sort by Name (A = Z)</option>
          <option value="salary">Sort by Salary (High = Low)</option>
        </select>

      </div>

      {/* Table */}
      <table className="border border-amber-400 border-collapse w-full text-center shadow-md">
        <thead className="bg-orange-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">NAME</th>
            <th className="border px-4 py-2">AGE</th>
            <th className="border px-4 py-2">SALARY</th>
            <th className="border px-4 py-2">EMAIL</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.age}</td>
                <td className="border px-4 py-2">{user.salary}</td>
                <td className="border px-4 py-2">{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-4 text-red-500">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default TableArrays;
