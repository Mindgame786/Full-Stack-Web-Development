import { useState, useEffect } from "react";

function Clock({ tcolor, bcolor }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);

  }, []);

  return (
    <h1
      className={`
        text-4xl mt-6 font-sans font-bold text-blue-500 bg-amber-100  rounded-md text-shadow-sm text-shadow-zinc-600 py-4 mb-6  px-125 transition-all ${tcolor} ${bcolor} `}>  


           {time.toLocaleTimeString()}  
     </h1>

      
  );
}

export default Clock;
