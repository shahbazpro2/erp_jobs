export interface CareerProps {
    jobTitle: string,
    companyName: string,
    companyLocation: string,
    confidential: boolean,
    fromDate: string,
    toDate: string,
    description: string,
    currentWorkHere: boolean
}
export interface CareerQueryProps extends CareerProps {
    id: string,
}
