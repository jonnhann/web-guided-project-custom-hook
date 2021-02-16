// on the way into localStorage, JSON.stringify (object -> string)
// on the way out of localStorage, JSON.parse (string -> object)
import { useState } from "react";

// This hook composes useState, providing the exact same format and functionality as useState, while also persisting the state value to localStorage

export const useLocalStorage = (key, initialValue) => {

  // First, check localStorage. (Did the user already start this form?)
  // If the value is already in localStorage, use it to initialize the useState call
  const [value, setValue] = useState(initialValue);


  // When setValue is called, in addition to the normal useState behavior, also persist the new value to localStorage.
  return [value, setValue];
}