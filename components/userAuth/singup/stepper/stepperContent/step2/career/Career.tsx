import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import CareerContent from './CareerContent';
import { ModalContext } from '@context/ModalContext'
import CareerCard from './CareerCard';
import { useLazyQuery } from '@apollo/client';
import { getAllCareers } from '@graphql/queries/AllCareers';
interface Props {
    setActive: Dispatch<SetStateAction<string>>
}

export interface CareerProps {
    id: string,
    jobTitle: { name: string },
    companyName: string,
    companyLocation: string,
    confidential: string,
    fromDate: string,
    toDate: string,
    description: string
}

const Career = ({ setActive }: Props) => {
    const [allCareers, { data, refetch, called }] = useLazyQuery(getAllCareers)
    const [open, setOpen] = useState(false)
    const [submit, setSubmit] = useState(false)

    console.log('data', data)
    const ContextValue = {
        open: open,
        submit: submit,
        handleClose: () => {
            setOpen(false)
        },
        handleSubmit: () => {
            setSubmit(true)
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

    /* useEffect(() => {
        console.log('called')
        allCareers()
    }, [called]) */

    /*  useEffect(() => {
         if (submit && refetch) {
             refetch()
             setSubmit(false)
         }
     }, [submit]) */

    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">

                <AddItemsWrapper title="Career Journey" subtitle="Add your career journey, you can add multiple careers." onBack={onBack} onContinue={onContinue} skip={false}>
                    <div className="mt-7 grid gap-2">
                        {data?.allCareers?.map((career: CareerProps, index: string) => <Fragment key={index}><CareerCard data={career} /></Fragment>)}

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
                <ModalContext.Provider value={ContextValue}>
                    <CareerContent />
                </ModalContext.Provider>
            </div>
        </div>
    )
}

export default Career
