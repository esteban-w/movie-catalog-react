import { ReactNode, useState } from "react";
import { GlobalContext } from "./GlobalContext";

type GlobalProviderProps = {
  children: ReactNode
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [query, setQuery] = useState('')

  return (
    <GlobalContext.Provider value={{ query, setQuery }}>
      {children}
    </GlobalContext.Provider>
  )
}