export interface JsonType {
    id: number,
    name: string
}

export interface JobProps {
    job_type: string[],
    availability_date: string,
    min_salary: string,
    max_salary: string,
    industry: JsonType | null,
    desire_job_title: JsonType | null
}