import moment from "moment"


export const initialCertificateState = {
    institution: '',
    title: '',
    end_date: moment(Date.now()).format('YYYY-MM-DD'),
}

export const initialCertificateEditState = {
    id: '',
    ...initialCertificateState
}
