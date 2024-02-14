import { useState, createContext } from "react";
import { ContextType, ContextProps } from "../types/context";

export const Context = createContext<ContextType | null>(null);

export default function ContextProvider({children} : ContextProps) {
    const [ flex, setFlex ] = useState({
        container: {
            width: { size: 240, unit: "px"},
            height: { size: 240, unit: "px"},
            display: "flex",
            direction: "initial",
            wrap: "nowrap",
            justify: "normal",
            items: "normal",
            gap: { size: 0, unit: "px"},
        },
        children: [
            {self: "stretch", grow: 0, shrink: 1, basis: { size: 0, unit: "px"},},
        ]
    });

  return (
    <Context.Provider value={{flex, setFlex}}>
      {children}
    </Context.Provider>
  )
}
