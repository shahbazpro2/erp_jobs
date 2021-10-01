export interface CertificateQueryProps extends CertificateProps {
    id: string
}
export interface CertificateProps {
    certificateTitle: string,
    certificateProvider: string,
    date: string,
}