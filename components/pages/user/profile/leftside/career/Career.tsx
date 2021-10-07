import React, { useState, Fragment } from 'react'
import { CareerModalContext } from '@context/ModalContext'
import { initialCareerEditState } from './initialStates'
import { CareerQueryProps } from './types'
import CareerCard from './CareerCard'
import { Button } from '@mui/material'
import CareerContent from './CareerContent'
import DialogAlert from '@components/common/alerts/DialogAlert'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import AddIcon from '@mui/icons-material/Add';
import objectIsEmpty from '@components/functions/objectIsEmpty'
import { useMutation } from '@apollo/client'
import { DeleteCareer } from '@graphql/mutations/user/career/DeleteCareer'
import { AllCareers } from '@graphql/queries/user/career/AllCareers';

interface Props {
    data: CareerQueryProps[]
}

const Career = ({ data }: Props) => {
    const [deleteCareer] = useMutation(DeleteCareer, { refetchQueries: [{ query: AllCareers }] })
    const [open, setOpen] = useState(false)
    const [editData, setEditData] = useState<CareerQueryProps>(initialCareerEditState)
    const [apiError, setApiError] = useState<string[]>([])
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [delId, setDelId] = useState(-1)
    const ContextValue = {
        editData,
        open,
        handleClose: () => {
            setEditData(initialCareerEditState)
            setOpen(false)
        },
        handleEdit: (data: CareerQueryProps) => {
            setEditData(data)
            setOpen(true)
        }
    }


    const onDelete = async () => {
        const id = delId
        setDelId(-1)
        try {
            const res = await deleteCareer({ variables: { id } })
            if (!objectIsEmpty(res)) {
                setApiSuccess([`Career deleted successfully`])
            }
        } catch (err: any) {
            setApiError(err.message)
        }
    }

    return (
        <div>
            <CareerModalContext.Provider value={ContextValue}>
                <div className="mt-7 grid gap-2">
                    {data?.map((career, index) => <Fragment key={index}><CareerCard data={career} onDelete={setDelId} /></Fragment>)}
                </div>
                <div className="mt-7">
                    <Button variant="outlined" className="w-full" color="primary" onClick={() => setOpen(true)}>
                        Add New <AddIcon style={{ width: 18 }} />
                    </Button>
                </div>

                <CareerContent />
            </CareerModalContext.Provider>
            <DialogAlert open={delId < 0 ? false : true} title="Are to sure to delete career?" handleClose={() => setDelId(-1)} handleAccept={onDelete} />
            <FeedbackApi apiError={apiError} apiSuccess={apiSuccess} setApiError={setApiError} setApiSuccess={setApiSuccess} />
        </div>
    )
}

export default Career
