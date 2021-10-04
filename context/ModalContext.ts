import { initialCertificateEditState } from "@components/common/certificates/initialStates";
import { CertificateQueryProps } from "@components/common/certificates/types";
import { initialCareerEditState } from "@components/pages/profile/user/leftside/career/initialStates";
import { CareerQueryProps } from "@components/pages/profile/user/leftside/career/types";
import { initialEducationEditState } from "@components/pages/profile/user/leftside/education/initialStates";
import { EducationQueryProps } from "@components/pages/profile/user/leftside/education/types";
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