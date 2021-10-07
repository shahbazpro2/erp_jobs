import moment from "moment"

export const initialCareerState = {
    jobTitle: ' ',
    companyName: '',
    companyLocation: '',
    fromDate: '',
    toDate: moment(Date.now()).format('YYYY-MM-DD'),
    currentWorkHere: false,
    confidential: false,
    description: ''
}

export const initialCareerEditState = {
    id: '',
    jobTitle: { id: '', name: ' ' },
    companyName: '',
    companyLocation: '',
    fromDate: '',
    toDate: '',
    currentWorkHere: false,
    confidential: false,
    description: ''
}