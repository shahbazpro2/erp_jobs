/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState } from 'react'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { CertificateModalContext } from '@context/ModalContext'
import { useMutation } from '@apollo/client';
import { CertificateQueryProps } from './types';
import objectIsEmpty from '@components/functions/objectIsEmpty';
import DialogAlert from '@components/common/alerts/DialogAlert';
import FeedbackApi from '@components/common/feedback/FeedbackAPi';
import { initialCertificateEditState } from './initialStates';
import { AllEducations } from '@graphql/queries/user/education/AllEducations';
import { DeleteEducation } from '@graphql/mutations/user/education/DeleteEducation';
import CertificateCard from './CertificateCard';
import CertificateContent from './CertificateContent';
import { deleteCertificate } from '@api/Certificates';

interface Props {
    data: CertificateQueryProps[]
}


const Certificates = ({ data }: Props) => {
    const [open, setOpen] = useState(false)
    /*  const [data, setData] = useState<CareerQueryProps[]>([]) */
    const [editData, setEditData] = useState<CertificateQueryProps>(initialCertificateEditState)
    const [apiError, setApiError] = useState<string[]>([])
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [delId, setDelId] = useState(-1)

    const ContextValue = {
        editData,
        open,
        handleClose: () => {
            setEditData(initialCertificateEditState)
            setOpen(false)
        },
        handleEdit: (data: CertificateQueryProps) => {
            setEditData(data)
            setOpen(true)
        }
    }

    const onDelete = async () => {
        const id = delId
        setDelId(-1)
        const res = await deleteCertificate(id)
        if (res?.error) {
            setApiError(res?.data)
            return
        }

        setApiSuccess(['Certificate deleted successfully'])
    }

    return (
        <div>
            <CertificateModalContext.Provider value={ContextValue}>
                <div className="mt-7 grid gap-2">
                    {data?.map((certificate, index) => <Fragment key={index}><CertificateCard data={certificate} onDelete={setDelId} /></Fragment>)}

                </div>
                <div className="mt-7">
                    <Button variant="outlined" className="w-full" color="primary" onClick={() => setOpen(true)}>
                        Add New <AddIcon style={{ width: 18 }} />
                    </Button>
                </div>

                <CertificateContent />
            </CertificateModalContext.Provider>
            <DialogAlert open={delId < 0 ? false : true} title="Are to sure to delete certificate?" handleClose={() => setDelId(-1)} handleAccept={onDelete} />
            <FeedbackApi apiError={apiError} apiSuccess={apiSuccess} setApiError={setApiError} setApiSuccess={setApiSuccess} />
        </div>
    )
}

export default Certificates
