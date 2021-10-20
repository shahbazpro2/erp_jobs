import moment from "moment";

export const initialJobStates = {
    job_type: [],
    availability_date: moment(new Date()).add(1, 'days').format('YYYY-MM-DD'),
    min_salary: "",
    max_salary: "",
    industry: null,
    desire_job_title: null
}