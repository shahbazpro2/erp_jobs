import moment from "moment"


export const initialCertificateState = {
    certificate_title: '',
    company: '',
    date: moment(Date.now()).format('YYYY-MM-DD'),
}

export const initialCertificateEditState = {
    id: '',
    ...initialCertificateState
}
