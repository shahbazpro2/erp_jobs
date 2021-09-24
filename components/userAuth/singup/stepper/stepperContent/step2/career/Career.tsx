/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import CareerContent from './CareerContent';
import { ModalContext } from '@context/ModalContext'
import CareerCard from './CareerCard';
import { useLazyQuery } from '@apollo/client';
import { getAllCareers } from '@graphql/queries/AllCareers';
import { CareerProps, CareerQueryProps } from './types';
import { initialCareerEditState, initialCareerState } from './initialStates';
interface Props {
    setActive: Dispatch<SetStateAction<string>>
}


const Career = ({ setActive }: Props) => {
    const [allCareers, { data, loading }] = useLazyQuery(getAllCareers)
    const [open, setOpen] = useState(false)
    const [editData, setEditData] = useState<CareerQueryProps>(initialCareerEditState)

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
        setActive('education')
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
                            {data?.allCareers?.map((career: CareerQueryProps, index: string) => <Fragment key={index}><CareerCard data={career} /></Fragment>)}

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
            </div>
        </div>
    )
}

export default Career
