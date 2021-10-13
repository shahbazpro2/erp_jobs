import { createContext } from "react";

export const HeaderContext = createContext({
    bg: "",
    boxShadow: "",
    handleHeader: (bg: string, boxShadow: string, employer?: boolean) => { }
})