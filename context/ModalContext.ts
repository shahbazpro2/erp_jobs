import { createContext } from "react";

export const ModalContext = createContext({
    open: false,
    handleClose: () => { }
})