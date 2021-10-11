import moment from "moment"


export const initialEducationState = {
    degreeType: ' ',
    degreeTitle: '',
    institution: '',
    startDate: '2017-05-18',
    endDate: moment(Date.now()).format('YYYY-MM-DD'),
}

export const initialEducationEditState = {
    id: '',
    ...initialEducationState
}
