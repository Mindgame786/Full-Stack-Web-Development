import { useState } from "react";
import Clock from "./Clock";

function DropDowns() {
  const [tcolor, setTcolor] = useState("text-red-600");
  const [bcolor, setBcolor] = useState("bg-zinc-100");

  const inputStyle =
    "border rounded-lg p-2 mt-2 w-60 font-sans text-lg font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400";

  return (
    <div className="flex flex-col items-center py-10">

      <h1 className="text-4xl font-bold text-shadow-2xs text-shadow-gray-800 text-gray-500 mb-4">
        Digital Clock Color Panel
      </h1>

      <div className="bg-white shadow-sm shadow-gray-500 rounded-2xl mt-4 p-6 w-[350px] space-y-6">

        {/* Text Color */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">
            Select Text Color:
          </label>

          <select
            className={inputStyle}
            onChange={(e) => setTcolor(e.target.value)}
          >
            <option value="text-red-600" className="text-red-600 font-semibold">
              Red
            </option>

            <option value="text-blue-600" className="text-blue-600 font-semibold">
              Blue
            </option>

            <option
              value="text-green-600"
              className="text-green-600 font-semibold"
            >
              Green
            </option>

            <option
              value="text-yellow-600"
              className="text-yellow-600 font-semibold"
            >
              Yellow
            </option>

            <option
              value="text-purple-600"
              className="text-purple-600 font-semibold"
            >
              Purple
            </option>
          </select>
        </div>

        {/* Background Color */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">
            Select Background Color:
          </label>

          <select
            className={inputStyle}
            onChange={(e) => setBcolor(e.target.value)}
          >
            <option value="bg-zinc-100" className="text-gray-700 font-semibold">
              White
            </option>

            <option value="bg-red-200" className="text-red-600 font-semibold">
              Light Red
            </option>

            <option value="bg-blue-200" className="text-blue-600 font-semibold">
              Light Blue
            </option>

            <option
              value="bg-green-200"
              className="text-green-600 font-semibold"
            >
              Light Green
            </option>

            <option
              value="bg-yellow-200"
              className="text-yellow-600 font-semibold"
            >
              Light Yellow
            </option>
          </select>
        </div>
      </div>

      {/* Clock Component */}
      <Clock tcolor={tcolor} bcolor={bcolor} />
    </div>
  );
}

export default DropDowns;
