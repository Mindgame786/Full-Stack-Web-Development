import { useState } from "react";

function DerivedState() {
  const [group, setGroup] = useState([]);
  const [user, setUser] = useState('');

  const addToGroup = () => {
    if (user.trim() === '') return; // خالی انٹری روکنے کے لئے
    setGroup([...group, user]);
    setUser(''); // یہ لائن input کو clear کرے گی
  }

  const total = group.length;
  const unique = [...new Set(group)].length;
  const lastEntry = group[group.length - 1];

  return (
    <>
      <h1 className='text-4xl mt-4 text-center mx-2 font-sans font-bold bg-zinc-50 text-green-400 rounded-md text-shadow-sm text-shadow-zinc-600 py-4'>
        Derived State
      </h1>

      <div className="items-center bg-zinc-200 ite mt-14 justify-center font-sans border-2 border-gray-700 min-h-screen mx-2">
        <h1 className='text-xl mt-20 text-left pl-10 py-2 ml-10 mr-205 mx-2 font-sans font-bold bg-zinc-50 text-rose-400 rounded-md text-shadow-sm text-shadow-zinc-600 '>
          Total Entries : {total}
        </h1>
        <h1 className='text-xl mt-4 text-left pl-10 py-2 ml-10 mr-205 mx-2 font-sans font-bold bg-zinc-50 text-rose-400 rounded-md text-shadow-sm text-shadow-zinc-600 '>
          Unique Entries : {unique}
        </h1>
        <h1 className='text-xl mt-4 text-left pl-10 py-2 ml-10 mr-205 mx-2 font-sans font-bold bg-zinc-50 text-rose-400 rounded-md text-shadow-sm text-shadow-zinc-600 '>
          Last Entry : {lastEntry}
        </h1>

        {/* Controlled Input */}
        <input
          value={user} // یہاں value bind کر دی
          onChange={(event) => setUser(event.target.value)}
          type="text"
          placeholder="Enter your name..."
          className="border-2 border-gray-600 rounded-sm pl-2 py-1.5 bg-zinc-50 mt-10 ml-10 mr-3"
        />

        <button
          onClick={addToGroup}
          className="border border-gray-700 bg-sky-500 text-zinc-100 border-none font-semibold font-sans rounded-sm py-2 px-4 hover:bg-sky-600 hover:text-zinc-200"
        >
          Add To Group
        </button>

        {group.map((items, index) => (
          <h3 className="ml-10 mt-4 text-gray-800 font-semibold font-sans" key={index}>
            {items}
          </h3>
        ))}
      </div>
    </>
  )
}

export default DerivedState;
