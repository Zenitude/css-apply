import { useState, createContext } from "react";
import { ContextType, ContextProps } from "../types/context";
import { defaultFlex } from "./defaultValues";

export const Context = createContext<ContextType | null>(null);

export default function ContextProvider({children} : ContextProps) {
    const [ flex, setFlex ] = useState(defaultFlex);   

  return (
    <Context.Provider value={{flex, setFlex}}>
      {children}
    </Context.Provider>
  )
}
