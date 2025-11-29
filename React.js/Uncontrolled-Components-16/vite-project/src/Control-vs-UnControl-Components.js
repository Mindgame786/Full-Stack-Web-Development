//---------------------------------------------------------------------------------------------                   Control-Components   VS   UnControl-Components                          ---------------------------------------------------------------------------------------------

// In React JS , the terms controlled components and uncontrolled components refer to how form inputs (like <input>,<textarea></textarea>,<select></select> etc.) handle and store their data.


// Controlled Components 

// The form data is handled by React state.
// The value of the input is controlled by React (useState or Similar Hooks )
// You must use an onChange handle to update state whenever the input  changes.




//                           UnControlled Components                    

// In an unControlled components, the form data is handled by the DOM itself.
// You use a ref to directly access the DOM element and read its value when needed.
// There is no binding between state and input value.
// We can  make uncontrolled components using QuerySelector or using useRef or any other method which is other than use of state.

