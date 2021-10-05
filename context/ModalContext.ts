
import { initialCareerEditState } from "@components/pages/profile/user/profile/leftside/career/initialStates";
import { CareerQueryProps } from "@components/pages/profile/user/profile/leftside/career/types";
import { initialCertificateEditState } from "@components/pages/profile/user/profile/leftside/certificates/initialStates";
import { CertificateQueryProps } from "@components/pages/profile/user/profile/leftside/certificates/types";
import { initialEducationEditState } from "@components/pages/profile/user/profile/leftside/education/initialStates";
import { EducationQueryProps } from "@components/pages/profile/user/profile/leftside/education/types";
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


export const CertificateModalContext = createContext({
    editData: initialCertificateEditState,
    open: false,
    handleClose: () => { },
    handleEdit: (data: CertificateQueryProps) => { }
})