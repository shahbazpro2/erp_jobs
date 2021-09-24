import React, { Dispatch, SetStateAction, useState } from 'react'
import { Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import { ModalContext } from '@context/ModalContext';
import EducationContent from './EducationContent';

interface Props {
    setActive: Dispatch<SetStateAction<string>>
}
const Education = ({ setActive }: Props) => {
    const [open, setOpen] = useState(false)
    const [submit, setSubmit] = useState(false)

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
        setActive('career')
    }

    const onSkip = () => {
        setActive('skills')
    }

    const onContinue = () => {
        setActive('skills')
    }

    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">
                <AddItemsWrapper title="Education" subtitle="Add your education, you can add multiple educations" onBack={onBack} onSkip={onSkip} onContinue={onContinue}>
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
                    <EducationContent />
                </ModalContext.Provider>
            </div>
        </div>
    )
}

export default Education
