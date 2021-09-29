export interface EducationQueryProps extends EducationProps {
    id: string
}
export interface EducationProps {
    degreeTitle: string,
    university: string,
    field: string,
    passYear: string,
    grade: string,
}