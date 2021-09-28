/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import CareerContent from './EducationContent';
import { EducationModalContext } from '@context/ModalContext'
import CareerCard from './EducationCard';
import { useLazyQuery, useMutation } from '@apollo/client';
import { EducationQueryProps } from './types';
import objectIsEmpty from '@components/functions/objectIsEmpty';
import { DeleteCareer } from '@graphql/mutations/user/career/DeleteCareer';
import { AllCareers } from '@graphql/queries/user/career/AllCareers';
import DialogAlert from '@components/common/alerts/DialogAlert';
import FeedbackApi from '@components/common/feedback/FeedbackAPi';
import { initialEducationEditState } from './initialStates';
interface Props {
    setActive: Dispatch<SetStateAction<string>>
}


const Education = ({ setActive }: Props) => {
    const [deleteCareer] = useMutation(DeleteCareer, { refetchQueries: [{ query: AllCareers }] })
    const [allCareers, { data }] = useLazyQuery(AllCareers)
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

    const onBack = () => {
        setActive('career')
    }

    const onContinue = () => {
        console.log('data', data)
        data?.allCareers?.length ?
            setActive('education') :
            setApiError([`You must need to add atleast one career to continue`])

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

    useEffect(() => {
        allCareers()
    }, [])



    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">
                <EducationModalContext.Provider value={ContextValue}>
                    <AddItemsWrapper title="Education" subtitle="Add your education, you can add multiple educations" onBack={onBack} onContinue={onContinue} skip={false}>
                        <div className="mt-7 grid gap-2">
                            {data?.allCareers?.map((career: EducationQueryProps, index: string) => <Fragment key={index}><CareerCard data={career} onDelete={setDelId} /></Fragment>)}

                        </div>
                        <div className="mt-7">
                            <Button variant="outlined" className="w-full" color="primary" onClick={() => setOpen(true)}>
                                Add New <AddIcon style={{ width: 18 }} />
                            </Button>
                        </div>
                        <div className="my-7">
                            <Divider />
                        </div>
                    </AddItemsWrapper>

                    <CareerContent />
                </EducationModalContext.Provider>
                <DialogAlert open={delId < 0 ? false : true} title="Are to sure to delete career?" handleClose={() => setDelId(-1)} handleAccept={onDelete} />
                <FeedbackApi apiError={apiError} apiSuccess={apiSuccess} setApiError={setApiError} setApiSuccess={setApiSuccess} />
            </div>
        </div>
    )
}

export default Education
