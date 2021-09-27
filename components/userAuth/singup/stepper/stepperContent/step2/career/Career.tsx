/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import CareerContent from './CareerContent';
import { ModalContext } from '@context/ModalContext'
import CareerCard from './CareerCard';
import { useLazyQuery, useMutation } from '@apollo/client';
import { CareerQueryProps } from './types';
import { initialCareerEditState } from './initialStates';
import objectIsEmpty from '@components/functions/objectIsEmpty';
import { DeleteCareer } from '@graphql/mutations/user/career/DeleteCareer';
import { AllCareers } from '@graphql/queries/user/career/AllCareers';
import SnakbarAlert from '@components/common/snakbarAlert/SnakbarAlert';
import DialogAlert from '@components/common/alerts/DialogAlert';
interface Props {
    setActive: Dispatch<SetStateAction<string>>
}


const Career = ({ setActive }: Props) => {
    const [deleteCareer] = useMutation(DeleteCareer, { refetchQueries: [{ query: AllCareers }] })
    const [allCareers, { data }] = useLazyQuery(AllCareers)
    const [open, setOpen] = useState(false)
    /*  const [data, setData] = useState<CareerQueryProps[]>([]) */
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

    const onBack = () => {
        setActive('basic')
    }

    const onContinue = () => {
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
                <ModalContext.Provider value={ContextValue}>
                    <AddItemsWrapper title="Career Journey" subtitle="Add your career journey, you can add multiple careers." onBack={onBack} onContinue={onContinue} skip={false}>
                        <div className="mt-7 grid gap-2">
                            {data?.allCareers?.map((career: CareerQueryProps, index: string) => <Fragment key={index}><CareerCard data={career} onDelete={setDelId} /></Fragment>)}

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
                </ModalContext.Provider>
                <DialogAlert open={delId < 0 ? false : true} title="Are to sure to delete career?" handleClose={() => setDelId(-1)} handleAccept={onDelete} />
                <SnakbarAlert open={apiError.length ? true : false} handleClose={() => setApiError([])} message={apiError} type="error" />
                <SnakbarAlert open={apiSuccess.length ? true : false} handleClose={() => setApiSuccess([])} message={apiSuccess} type="success" />
            </div>
        </div>
    )
}

export default Career
