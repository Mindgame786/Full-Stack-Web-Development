//--------------------------------[ HOOKS IN REACT ]----------------------------------------

// Hooks are special functions in React that let You use feactures Like state and lifecycle in functional components.


// Short History:

// Hooks were added in React 16.8 (2019) to  allow functional components to do what class components could do (like using state and side effects).

// IMPORTANT POINT:
// Hooks are Only use in Functional components but not use in class components.


//---------------------------------------------------------------------------------------------                            MOST IMPORTANT HOOKS IN REACT                                    ---------------------------------------------------------------------------------------------


//--------------------------------------------------->

// (1) USeSTATe   :        For State management Purpose: Manage state in a functional component.Example Use: Counter, form input, toggle UI.Why widely used: Every component that has changing data will likely use it.                                                           ::  const [count, setCount] = useState(0);


//---------------------------------------------------->








//------------------------------------------------------>

// (2) USeEffect  :        For side effects ( e.g., API calls) Purpose: Perform side effects (API calls, DOM updates, subscriptions). Example Use: Fetch data on component mount, set up timers, listen to events. Why widely used: It replaces lifecycle methods in class components.::             useEffect(() => {                                                      console.log("Component mounted");
// }, []); // runs once

//-------------------------------------------------------->






//--------------------------------------------------->

// (3) USeContext :   For using context-->                                                Purpose: Access global state or theme without prop drilling.                           Example Use: Dark/light mode, user authentication state.                                   Why widely used: Makes state sharing across components easy.                                 ::    const value = useContext(MyContext);

//---------------------------------------------------->






//----------------------------------------------------->

// (4) useREf     :       For accessing DOM or Keeping values                            Purpose: Access DOM elements or persist mutable values across renders.                Example Use: Focus input, store timers, prevent re-renders.                               Why widely used: Essential for working with real DOM and uncontrolled components.            ::          const inputRef = useRef();                                                  ::          inputRef.current.focus();

//------------------------------------------------------>






//------------------------------------------------------>

// (5) useMemo    :        For Memoization Purpose: Memoize expensive calculations to improve performance. Example Use: Filtering or sorting large lists. Why widely used: Optimizes re-renders in complex components.                                                           ::          const filtered = useMemo(() => items.filter(i => i.active), [items]);


//------------------------------------------------------->









//------------------------------------------------------>

// (6) useCallback  :    to prevent function re-creation. Purpose: Memoize functions to avoid unnecessary re-renders. Example Use: Passing callbacks to child components. Why widely used: Prevents performance issues in large React apps.                                             ::        const handleClick = useCallback(() => {                                            console.log("Clicked");
// }, []);

//------------------------------------------------------->






//-------------------------------------------------------->

// (7) useReducer   :    Purpose: Manage complex state logic (like Redux inside a component).Example Use: Form state, counters with multiple actions.                                   Why widely used: Better than useState when state depends on previous values or has multiple updates.                                                                               ::      const [state, dispatch] = useReducer(reducer, initialState);


//--------------------------------------------------------->


// HOW to Identify Hooks?

// ALl Hooks start the word  "use"  (like useState, useEffect).
// Hooks are only used inside React functional components. or custom hooks.


//---------------------------------------------------------------------------------------------                            (2) USeEffect()?                                                 ---------------------------------------------------------------------------------------------

// useEffect is a Hook in React that allows you to run side effects in your functional components.

// SIDE Effects?
//  SIDE effects are actions that happen outside the main function of rendering UI.
//  THese actions don't  directly return UI but affect the app's behavior or system.

// Syntax of USeEffect
//                      useEffect(function(),[dependencies]);

// Example:
//                    useEffect(  ()=>   {
//                           code for side effect
//                     },  [dependencies]);


//---------------------------------------------------------------------------------------------                             How We Can Use useEffect in React JS                            ---------------------------------------------------------------------------------------------

// To Call Every Time:
//                    useEffect(  ()=>   {
//                     Call everyTime      (code for side effect)
//                     });

// To Call Once Time:
//                    useEffect(  ()=>   {
//                     Call Only Once Time      (code for side effect)
//                     },[]);


// To Call With Single State:
//                    useEffect(  ()=>   {
//                     Call with State Which Written      (code for side effect)
//                     },[state1]);


// To Call With Multiple States:
//                    useEffect(  ()=>   {
//                     Call with States Which Written      (code for side effect)
//                     },[state1,state2,state3]);

//-------------------------------------------------------------
// To Call With Props:
//                    useEffect(  ()=>   {
//                     Call On Changes Props      (code for side effect)
//                     },[Prop11,Prop2]);


//==========================================================================================================================================================================================




