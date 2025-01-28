import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }) {
  const [query, setQuery] = useState()

  return (
    <GlobalContext.Provider value={{ query, setQuery }}>
      {children}
    </GlobalContext.Provider>
  )
}