// Smooth Circle Loader
export default function CircleLoader({ isLoading }) {
  return (
    <div className="flex justify-center items-center mt-4">
      {isLoading && (
        <div
          className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-4 border-t-transparent border-b-transparent border-blue-400 border-l-blue-600 border-r-blue-600 rounded-full animate-spin"
        ></div>
      )}
    </div>
  );
}