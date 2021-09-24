import { initialCareerEditState } from "@components/userAuth/singup/stepper/stepperContent/step2/career/initialStates";
import { CareerQueryProps } from "@components/userAuth/singup/stepper/stepperContent/step2/career/types";
import { createContext } from "react";

export const ModalContext = createContext({
    editData: initialCareerEditState,
    open: false,
    handleClose: () => { },
    handleEdit: (data: CareerQueryProps) => { }
})