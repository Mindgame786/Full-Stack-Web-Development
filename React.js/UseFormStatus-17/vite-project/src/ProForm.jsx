"use client";

import { useState, useTransition,startTransition } from "react";
import CircleLoader from "./CircleLoader";
import SubmitButton from "./SubmitButton";
import FormInputs from "./FormInputs";
import ToastNotifications from "./ToastNotifications";
import { toast } from "react-toastify";



export default function ProForm() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [stage, setStage] = useState("idle");

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };




  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill all fields!", {
        style: { background: "#ef4444", color: "#fff", fontWeight: "500" },
        bodyStyle: { margin: 0 },
      });
      return;
    }


//-------------------------------------------------------

    startTransition(() => {
      setStage("loading");
      
      setTimeout(() => {


        setStage("submitting");
        setTimeout(() => {
          console.log("Form Submission:", formData);
          setFormData({ name: "", email: "", password: "" });
          setStage("idle");

          toast.success("Form submitted successfully!", {
            style: { background: "#22c55e", color: "#fff", fontWeight: "500" },
            bodyStyle: { margin: 0 },
            autoClose: 4000,
          });
        }, 1500);
      }, 2000);
    });
  };



  //----------------------------------------------------------------------

  const isLoading = stage === "loading" || isPending;
  const isSubmitting = stage === "submitting";

  //----------------------------------------------------------------------

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-b from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-6 text-center">
        ProForm
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-md space-y-4 shadow-md"
      >
        <FormInputs formData={formData} handleChange={handleChange} />


        <SubmitButton isLoading={isLoading} isSubmitting={isSubmitting}>


          {isSubmitting ? "Submitting..." : isPending ? "Processing..." : "Submit"}

        </SubmitButton>

        <CircleLoader isLoading={isLoading} />
      </form>

      <ToastNotifications />
    </div>
  );
}
