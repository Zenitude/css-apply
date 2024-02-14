import { FlexboxType } from "./flexbox";

export type ContextType = {
    flex: FlexboxType;
    setFlex: React.Dispatch<React.SetStateAction<FlexboxType>>;
}

export type ContextProps = {
    children: React.ReactNode;
}