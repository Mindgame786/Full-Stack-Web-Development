import { useState } from "react";

function SubmitButton({ pending }) {
  return (
    <button
      type="submit"
      disabled={pending}

      className={`p-2 rounded text-white ${
        pending ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
      }`} >

      {pending ? "Submitting..." : "Submit"}

    </button>
  );
}

export default function Page() {

  const [pending, setPending] = useState(false);


  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));



    const formData = new FormData(e.target);

    console.log("Name:", formData.get("name"));
    console.log("Phone:", formData.get("phone"));
    console.log("Email:", formData.get("email"));

    setPending(false);
  }





  return (
    <div className="flex items-center  m-2 rounded-md justify-center min-h-screen bg-slate-100">


      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded w-80 flex flex-col space-y-4">



        <h2 className="text-xl font-bold text-center mb-2 text-gray-700">
         Form Data 
        </h2>



             {/* Name */}
       <div className="flex flex-col">
          <label className="text-gray-600 mb-1 font-medium">Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name likhein..."
            className="border p-2 rounded"
          />
        </div>

              {/* Phone */}
          <div className="flex flex-col">
             <label className="text-gray-600 mb-1 font-medium">Phone Number</label>
              <input
            name="phone"
            type="text"
            placeholder="Enter your number..."
            className="border p-2 rounded"
          />
        </div>

        {/* Email */}
         <div className="flex flex-col">
         <label className="text-gray-600 mb-1 font-medium">Email Address</label>
        <input
            name="email"
            type="email"
            placeholder="Enter your email..."
            className="border p-2 rounded"
          />
        </div>

        <SubmitButton pending={pending} /> 
      </form>

    </div>
  
  
  
)}
