/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import { EducationModalContext } from '@context/ModalContext'
import { useLazyQuery, useMutation } from '@apollo/client';
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
    setActive: Dispatch<SetStateAction<string>>
}


const Education = ({ setActive }: Props) => {
    const [deleteEducation] = useMutation(DeleteEducation, { refetchQueries: [{ query: AllEducations }] })
    const [allEducations, { data }] = useLazyQuery(AllEducations, { fetchPolicy: 'cache-and-network' })
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

    console.log('data', data)

    const onBack = () => {
        setActive('career')
    }

    const onContinue = () => {
        setActive('skills')
    }

    const onSkip = () => {
        setActive('skills')
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

    useEffect(() => {
        allEducations()
    }, [])

    console.log('data', data)

    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">
                <EducationModalContext.Provider value={ContextValue}>
                    <AddItemsWrapper title="Education" subtitle="Add your education, you can add multiple educations" onBack={onBack} onContinue={onContinue} disabled={objectIsEmpty(data?.allEducations)} skip={true} onSkip={onSkip}>
                        <div className="mt-7 grid gap-2">
                            {data?.allEducations?.map((education: EducationQueryProps, index: string) => <Fragment key={index}><EducationCard data={education} onDelete={setDelId} /></Fragment>)}

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

                    <EducationContent />
                </EducationModalContext.Provider>
                <DialogAlert open={delId < 0 ? false : true} title="Are to sure to delete education?" handleClose={() => setDelId(-1)} handleAccept={onDelete} />
                <FeedbackApi apiError={apiError} apiSuccess={apiSuccess} setApiError={setApiError} setApiSuccess={setApiSuccess} />
            </div>
        </div>
    )
}

export default Education
