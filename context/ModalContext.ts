import { initialCareerEditState } from "@components/common/career/initialStates";
import { CareerQueryProps } from "@components/common/career/types";
import { initialEducationEditState } from "@components/common/education/initialStates";
import { EducationQueryProps } from "@components/common/education/types";
import { createContext } from "react";

export const CareerModalContext = createContext({
    editData: initialCareerEditState,
    open: false,
    handleClose: () => { },
    handleEdit: (data: CareerQueryProps) => { }
})

export const EducationModalContext = createContext({
    editData: initialEducationEditState,
    open: false,
    handleClose: () => { },
    handleEdit: (data: EducationQueryProps) => { }
})