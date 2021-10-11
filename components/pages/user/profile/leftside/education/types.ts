export interface EducationQueryProps extends EducationProps {
    id: string
}
export interface EducationProps {
    degreeType: string,
    degreeTitle: string,
    institution: string,
    startDate: string,
    endDate: string,
}