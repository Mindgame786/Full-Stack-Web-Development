"use client";

export default function FormInputs({ formData, handleChange }) {
  return (
    <>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-3 sm:p-3.5 md:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base md:text-lg transition-all duration-200"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-3 sm:p-3.5 md:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base md:text-lg transition-all duration-200"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full p-3 sm:p-3.5 md:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base md:text-lg transition-all duration-200"
      />
    </>
  );
}
