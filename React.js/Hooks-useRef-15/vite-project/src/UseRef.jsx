import { useRef, useState } from "react";

function UseRefProject() {


  const inputRef = useRef(null);
  const boxRef = useRef(null);

  
  const [visible, setVisible] = useState(true);
  const [isColorChanged, setIsColorChanged] = useState(false); // toggle state
  
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------

  const originalValue = useRef("UMAR JUTT G BRAND"); // ⭐ store original value
  // ⭐ Handle input change → store value in ref
  const handleInputChange = (e) => {
    originalValue.current = e.target.value; // save typed value in ref
  };

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------



  // ⭐ Fill + Focus → use value from ref
  const handleFillAndFocus = () => {
    inputRef.current.value = originalValue.current; 
    inputRef.current.placeholder = "Enter Name Here...";
    inputRef.current.style.color = "Blue";
    inputRef.current.style.fontWeight = "bold";
    inputRef.current.focus();
  };



  // ⭐ Reset input + reset box color
  const handleReset = () => {
    inputRef.current.value = ""; // clear input
    inputRef.current.placeholder = "Type Something...";
    inputRef.current.style.color = "black";

    boxRef.current.style.backgroundColor = "#bfdbfe"; // original color
    boxRef.current.style.transition = "0.4s";

    setIsColorChanged(false); // reset toggle state
  };

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  


  // ⭐ Show / Hide input
  const handleToggle = () => setVisible(!visible);



  // Toggle box color
  const changeBoxColor = () => {
    
    setIsColorChanged(!isColorChanged);

    boxRef.current.style.backgroundColor = !isColorChanged ? "#eee6a3" : "#bfdbfe";
    boxRef.current.style.transition = "0.4s";
  };



  const styles = {
    container:
      "border-2 border-gray-700 bg-blue-200 min-h-[350px] mx-auto mt-10 p-6 rounded-md w-[350px]",
    button:
      "bg-teal-200 border-2 border-black px-4 py-2 rounded-md font-semibold hover:scale-105 transition",
    input:
      "border-2 border-gray-600 w-[250px] py-1.5 px-2 font-bold rounded-md mt-4",
  };

  return (
    <>
      <h1 className="text-4xl text-center font-bold text-green-500 mt-5">
        useRef Complete Project
      </h1>

      <section ref={boxRef} className={styles.container}>
        <div className="flex gap-3 flex-wrap justify-center">
          <button onClick={handleFillAndFocus} className={styles.button}>
            Fill + Focus
          </button>
          <button onClick={handleReset} className={styles.button}>
            Reset
          </button>
          <button onClick={handleToggle} className={styles.button}>
            Hide / Show
          </button>
          <button onClick={changeBoxColor} className={styles.button}>
            Change Box Color
          </button>
        </div>

        <input
          ref={inputRef}
          type="text"
          className={`${styles.input} ${visible ? "block" : "hidden"}`}
          placeholder="Type Something..."
          onChange={handleInputChange} // ⭐ track typing
        />
      </section>
    </>
  );
}

export default UseRefProject;
