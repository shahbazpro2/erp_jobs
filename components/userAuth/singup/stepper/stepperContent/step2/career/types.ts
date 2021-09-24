export interface CareerQueryProps {
    id: string,
    jobTitle: { id: string, name: string },
    companyName: string,
    companyLocation: string,
    confidential: boolean,
    fromDate: string,
    toDate: string,
    description: string,
    currentWorkHere: boolean
}
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