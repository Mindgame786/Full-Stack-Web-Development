"use client";

export default function SubmitButton({ isLoading, isSubmitting, children }) {
  return (
    <button
      type="submit"
      disabled={isLoading || isSubmitting}
      className={`w-full px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-semibold text-white transition-all duration-300 ${
        isLoading || isSubmitting
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg"
      } text-sm sm:text-base md:text-lg`}
    >
      {children}
    </button>
  );
}
