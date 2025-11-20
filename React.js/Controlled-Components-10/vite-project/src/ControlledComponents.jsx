import { useState } from "react";
import { RefreshCcw, Send } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* -------------------------
   Utility → Output box classes
   ------------------------- */



function outputBox(value) {
  return `w-full min-h-[56px] text-left py-3 px-4  rounded-md transition break-words whitespace-pre-wrap font-sans
    ${value ? "bg-white text-blue-700 border border-blue-200 shadow-sm font-semibold" : "bg-transparent text-gray-400 border border-transparent font-medium"
    }`;
}



/* -------------------------
   Main Component
   ------------------------- */


export default function FormWithOutput() {
  // Form inputs
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");



  // Live Preview state (real-time updates)
  const [liveName, setLiveName] = useState("");
  const [livePassword, setLivePassword] = useState("");
  const [liveTel, setLiveTel] = useState("");


  // Real-time update for Live Preview
  const handleNameChange = (e) => {
    setName(e.target.value);
    setLiveName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setLivePassword(e.target.value);
  };

  const handleTelChange = (e) => {
    setTel(e.target.value);
    setLiveTel(e.target.value);
  };




  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Toast notification for submit
    toast.success("Form submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    console.log({ name, password, tel });

    // Clear only form inputs, Live Preview remains
    setName("");
    setPassword("");
    setTel("");
  };

  // Handle reset → clear all fields + Live Preview
  const handleReset = () => {
    setName("");
    setPassword("");
    setTel("");
    setLiveName("");
    setLivePassword("");
    setLiveTel("");



    // Toast notification for reset
    toast.info("Form and Live Preview cleared!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };




  return (
    <div className="min-h-[70vh] bg-gradient-to-br mt-4 from-blue-100 shadow-lg rounded-md to-red-200 via-amber-200 py-6 font-sans">
    
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">

          {/* LEFT: Form Section */}
          <div className="md:w-1/2 bg-white rounded-lg p-6 flex items-center justify-center shadow-sm">
            <form
              onSubmit={handleSubmit}
              autoComplete="on"
              className="w-full max-w-md bg-white rounded-lg p-6 "
            >
              {/* Stylish heading */}
              <h3 className="text-2xl font-extrabold text-blue-600 mb-6">
                My Form
              </h3>

              {/* Name Input */}
              <label className="block text-sm font-semibold text-gray-700">
                Name
                <input
                  type="text"
                  name="username"
                  autoComplete="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Enter your name"
                  className="mt-2 w-full border rounded-md px-3 py-2 font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>

              {/* Password Input */}
              <label className="block text-sm font-semibold text-gray-700 mt-4">
                Password
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className="mt-2 w-full border rounded-md px-3 py-2 font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>

              {/* Phone Input */}
              <label className="block text-sm font-semibold text-gray-700 mt-4">
                Phone No.
                <input
                  type="tel"
                  name="tel"
                  autoComplete="tel"
                  value={tel}
                  onChange={handleTelChange}
                  placeholder="Enter your phone number"
                  className="mt-2 w-full border rounded-md px-3 py-2 font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 mt-6">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-white border border-red-300 text-red-600 font-semibold
                             hover:bg-red-50 active:scale-95 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-red-200"
                >
                  <RefreshCcw size={18} />
                  Reset
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-md 
                             bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold
                             hover:from-blue-600 hover:to-blue-700 active:scale-95 shadow-md transition 
                             focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <Send size={18} />
                  Submit
                </button>
              </div>
            </form>
          </div>





          {/* RIGHT: Live Preview Section */}
          <div className="md:w-1/2 bg-blue-50 rounded-lg p-6 flex items-start justify-center shadow-sm">
            <div className="w-full max-w-md space-y-4">
              {/* Stylish heading */}
              <h4 className="text-2xl font-extrabold text-indigo-600 mb-4">
                Live Preview
              </h4>

              {/* Output Boxes */}
              <div className={outputBox(liveName)}>
                {liveName || "Your Name will appear here"}
              </div>
              <div className={outputBox(livePassword)}>
                {livePassword || "Your Password will appear here"}
              </div>
              <div className={outputBox(liveTel)}>
                {liveTel || "Your Phone No. will appear here"}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
