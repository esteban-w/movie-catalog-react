import { Dispatch, SetStateAction, createContext, useContext } from "react";

type GlobalContextType = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<GlobalContextType>({
  query: '',
  setQuery: () => {}
})

export function useGlobalContext() {
  const context = useContext(GlobalContext)
  
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }

  return context
}