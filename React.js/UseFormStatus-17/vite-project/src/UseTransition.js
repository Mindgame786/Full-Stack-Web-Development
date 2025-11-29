//-----------------------------UseTransition()?----------------------------------------------

// The UseTransition hook in React is a built-in hook (introduced in React 18) is used to make your app feel more responsive by allowing you to mark certain state updates as non-urgent (low priority.)


// Why it is used?

// Normally, when you update state in React, all updates are treated as urgent.If the update involves something heavy (like filtering a large list, rendering complex UI), the interface may "freeze" for a moment.

// useTransitionsolves this by splitting updates into  two types: 

// Urgent updates-->  Thing like typing, clicking buttons, selcting options (chould update instantly).

// Transition (non-urgent) updates-->  Thing like rendering a big list, running filters, or heavy UI work (can ve delayed slightly).


// Syntax: 

//  const  [ispending,startTransition] = use Transition() ;

//  isPending --> true while React is processign the transition (useful to show a loader).

// startTransition (Callback) ---> Wrap the non-urgent update inside this function.