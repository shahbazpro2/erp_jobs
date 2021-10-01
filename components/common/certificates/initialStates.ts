import moment from "moment"


export const initialCertificateState = {
    certificateTitle: '',
    certificateProvider: '',
    date: moment(Date.now()).format('YYYY-MM-DD'),
}

export const initialCertificateEditState = {
    id: '',
    ...initialCertificateState
}
