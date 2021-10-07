/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState } from 'react'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { EducationModalContext } from '@context/ModalContext'
import { useMutation } from '@apollo/client';
import { EducationQueryProps } from './types';
import objectIsEmpty from '@components/functions/objectIsEmpty';
import DialogAlert from '@components/common/alerts/DialogAlert';
import FeedbackApi from '@components/common/feedback/FeedbackAPi';
import { initialEducationEditState } from './initialStates';
import { AllEducations } from '@graphql/queries/user/education/AllEducations';
import { DeleteEducation } from '@graphql/mutations/user/education/DeleteEducation';
import EducationCard from './EducationCard';
import EducationContent from './EducationContent';

interface Props {
    data: EducationQueryProps[]
}


const Education = ({ data }: Props) => {
    const [deleteEducation] = useMutation(DeleteEducation, { refetchQueries: [{ query: AllEducations }] })
    const [open, setOpen] = useState(false)
    /*  const [data, setData] = useState<CareerQueryProps[]>([]) */
    const [editData, setEditData] = useState<EducationQueryProps>(initialEducationEditState)
    const [apiError, setApiError] = useState<string[]>([])
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [delId, setDelId] = useState(-1)

    const ContextValue = {
        editData,
        open,
        handleClose: () => {
            setEditData(initialEducationEditState)
            setOpen(false)
        },
        handleEdit: (data: EducationQueryProps) => {
            setEditData(data)
            setOpen(true)
        }
    }

    const onDelete = async () => {
        const id = delId
        setDelId(-1)
        try {
            const res = await deleteEducation({ variables: { id } })
            if (!objectIsEmpty(res)) {
                setApiSuccess([`Education deleted successfully`])
            }
        } catch (err: any) {
            setApiError(err.message)
        }
    }

    return (
        <div>
            <EducationModalContext.Provider value={ContextValue}>
                <div className="mt-7 grid gap-2">
                    {data?.map((education, index) => <Fragment key={index}><EducationCard data={education} onDelete={setDelId} /></Fragment>)}

                </div>
                <div className="mt-7">
                    <Button variant="outlined" className="w-full" color="primary" onClick={() => setOpen(true)}>
                        Add New <AddIcon style={{ width: 18 }} />
                    </Button>
                </div>

                <EducationContent />
            </EducationModalContext.Provider>
            <DialogAlert open={delId < 0 ? false : true} title="Are to sure to delete education?" handleClose={() => setDelId(-1)} handleAccept={onDelete} />
            <FeedbackApi apiError={apiError} apiSuccess={apiSuccess} setApiError={setApiError} setApiSuccess={setApiSuccess} />
        </div>
    )
}

export default Education
