import React, { useState } from "react";
import { Mail, DollarSign, User } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./index.css"; // Tailwind CSS already imported

// ---------- Load Google Fonts (100+ via API) ----------
const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&family=Open+Sans&family=Lato&family=Montserrat&family=Oswald&family=Raleway&family=Ubuntu&family=Noto+Sans&family=Playfair+Display&family=Source+Sans+Pro&family=Merriweather&family=Fira+Sans&family=PT+Sans&family=Work+Sans&family=Nunito&family=Inconsolata&family=Inter&family=Rubik&family=Karla&family=Overpass&family=Cabin&family=Crimson+Text&family=Libre+Baskerville&family=Mulish&family=Quicksand&family=Teko&family=Josefin+Sans&family=Signika&family=Asap&family=Prompt&family=Heebo&family=Arimo&family=Chivo&family=DM+Sans&family=IBM+Plex+Sans&family=Exo+2&family=Manrope&family=Public+Sans&family=Titillium+Web&family=Hind&family=Barlow&family=Varela+Round&family=Kanit&family=Zilla+Slab&family=Fjalla+One&family=Cairo&family=Questrial&family=Assistant&family=Baloo+2&family=Archivo&family=Catamaran&family=Kumbh+Sans&family=Domine&family=Urbanist&family=Plus+Jakarta+Sans&family=Space+Grotesk&family=Nanum+Gothic&family=Martel&family=Acme&family=Be+Vietnam+Pro&family=League+Spartan&family=Alice&family=Cormorant&family=Amiri&family=Mada&family=Almarai&family=Antic+Slab&family=Rozha+One&family=Unna&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

// ---------- Font Families List (100+ Updated) ----------
const fontFamilies = [
  "Poppins", "Roboto", "Open Sans", "Lato", "Montserrat", "Oswald", "Raleway",
  "Ubuntu", "Noto Sans", "Playfair Display", "Source Sans Pro", "Merriweather",
  "Fira Sans", "PT Sans", "Work Sans", "Nunito", "Inconsolata", "Inter", "Rubik",
  "Karla", "Overpass", "Cabin", "Crimson Text", "Libre Baskerville", "Mulish",
  "Quicksand", "Teko", "Josefin Sans", "Signika", "Asap", "Prompt", "Heebo",
  "Arimo", "Chivo", "DM Sans", "IBM Plex Sans", "Exo 2", "Manrope", "Public Sans",
  "Titillium Web", "Hind", "Barlow", "Varela Round", "Kanit", "Zilla Slab",
  "Fjalla One", "Cairo", "Questrial", "Assistant", "Baloo 2", "Archivo",
  "Catamaran", "Kumbh Sans", "Domine", "Urbanist", "Plus Jakarta Sans",
  "Space Grotesk", "Nanum Gothic", "Martel", "Acme", "Be Vietnam Pro",
  "League Spartan", "Alice", "Cormorant", "Amiri", "Mada", "Almarai",
  "Antic Slab", "Rozha One", "Unna"
];

const TableData = () => {
  const [search, setSearch] = useState("");
  const [caseType, setCaseType] = useState("normal");
  const [sortType, setSortType] = useState("");
  const [fontFamily, setFontFamily] = useState("Poppins");

  // --------- Employees Data ----------
  const employees = [
    { ID: 1, NAME: "Ahmed Khan", AGE: 24, EMAIL: "ahmed.khan@gmail.com", SALARY: 45000 },
    { ID: 2, NAME: "Umar Jutt", AGE: 28, EMAIL: "umar.jutt@yahoo.com", SALARY: 72500 },
    { ID: 3, NAME: "Ali Raza", AGE: 31, EMAIL: "ali.raza@outlook.com", SALARY: 70000 },
    { ID: 4, NAME: "Sara Malik", AGE: 26, EMAIL: "sara.malik@gmail.com", SALARY: 48000 },
    { ID: 5, NAME: "Hassan Sheikh", AGE: 35, EMAIL: "hassan.sheikh@hotmail.com", SALARY: 15000 },
    { ID: 6, NAME: "Fatima Noor", AGE: 29, EMAIL: "fatima.noor@gmail.com", SALARY: 54500 },
    { ID: 7, NAME: "Bilal Ahmad", AGE: 33, EMAIL: "bilal.ahmad@protonmail.com", SALARY: 60000 },
    { ID: 8, NAME: "Ayesha Tariq", AGE: 27, EMAIL: "ayesha.tariq@yahoo.com", SALARY: 50000 },
  ];

  // ---------- Case Functions ----------
  const formatText = (text) => {
    if (typeof text !== "string") return text;
    switch (caseType) {
      case "upper": return text.toUpperCase();
      case "lower": return text.toLowerCase();
      case "capitalize": return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      default: return text;
    }
  };

  // ---------- Filter ----------
  let filteredData = employees.filter(
    (row) =>
      row.NAME.toLowerCase().includes(search.toLowerCase()) ||
      row.EMAIL.toLowerCase().includes(search.toLowerCase())
  );

  // ---------- Sort ----------
  if (sortType === "nameAZ") {
    filteredData = [...filteredData].sort((a, b) => a.NAME.localeCompare(b.NAME));
  } else if (sortType === "salaryHL") {
    filteredData = [...filteredData].sort((a, b) => b.SALARY - a.SALARY);
  }

  return (
    <div
      className="p-6 bg-gradient-to-r from-green-50 to-emerald-100 min-h-screen"
      style={{ fontFamily }}
    >
      {/* ---------- Heading ---------- */}
      <h1 className="text-4xl font-bold font-sans text-center mb-6 text-emerald-700 bg-emerald-100 py-4 rounded-lg shadow-md">
        Stylish Employee Records
      </h1>

      {/* ---------- Search + Options (One Line) ---------- */}
      <div className="flex justify-between items-center mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search Employee..."
          className="px-4 py-2 w-72 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Options */}
        <div className="flex gap-4">
          {/* Case Dropdown */}
          <select
            className="px-3 py-2 border rounded-lg shadow-sm"
            value={caseType}
            onChange={(e) => setCaseType(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="upper">UPPERCASE</option>
            <option value="lower">lowercase</option>
            <option value="capitalize">Capitalize</option>
          </select>

          {/* Sort Dropdown */}
          <select
            className="px-3 py-2 border rounded-lg shadow-sm"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort</option>
            <option value="nameAZ">Name A–Z</option>
            <option value="salaryHL">Salary High → Low</option>
          </select>

          {/* Font Family Dropdown */}
          <select
            className="px-3 py-2 border rounded-lg shadow-sm"
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
          >
            {fontFamilies.map((font, idx) => (
              <option key={idx} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
      </div>



      {/* ---------- Table ---------- */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 border-collapse rounded-lg shadow-lg bg-white">
          <caption className="caption-top text-lg font-semibold text-emerald-700 py-2">
            📊 Table 3.1: Employee Information
          </caption>
          <thead className="bg-emerald-600 text-white">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Age</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Salary</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr
                key={row.ID}
                className={`${index % 2 ? "bg-gray-50" : "bg-white"} hover:bg-emerald-50 transition`}
              >
                <td className="px-4 py-2 text-center border">{row.ID}</td>

                {/* Name */}
                <td className="px-4 py-2 text-center border">
                  <div className="flex justify-center items-center gap-2">
                    <User size={16} className="text-emerald-600" />
                    {formatText(row.NAME)}
                  </div>
                </td>

                <td className="px-4 py-2 text-center border">{row.AGE}</td>

                {/* Email */}
                <td className="px-4 py-2 text-center border whitespace-nowrap">
                  <span className="inline-flex items-center gap-2">
                    <Mail size={16} className="text-blue-500" />
                    {formatText(row.EMAIL)}
                  </span>
                </td>

                {/* Salary */}
                <td className="px-4 py-2 text-center border font-semibold text-emerald-700 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1">
                    <DollarSign size={16} /> {row.SALARY.toLocaleString()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------- Salary Graph Below Table ---------- */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-emerald-700 mb-4">Salary Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={employees}>
            <XAxis dataKey="NAME" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="SALARY" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TableData;
