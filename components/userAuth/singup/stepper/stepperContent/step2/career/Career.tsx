import React, { createContext, Dispatch, SetStateAction, useState } from 'react'
import { Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddItemsWrapper from '../../../../../../common/addItemsWrapper/AddItemsWrapper';
import CareerContent from './CareerContent';
interface Props {
    setActive: Dispatch<SetStateAction<string>>
}
export const ModalContext = createContext({
    open: false,
    handleClose: (val: boolean) => { }
})

const Career = ({ setActive }: Props) => {
    const [open, setOpen] = useState(false)

    const ContextValue = {
        open: open,
        handleClose: (val: boolean) => {
            setOpen(val)
        }
    }

    const onBack = () => {
        setActive('basic')
    }

    const onContinue = () => {
        setActive('education')
    }
    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">
                <AddItemsWrapper title="Career Journey" subtitle="Add your career journey, you can add multiple careers." onBack={onBack} onContinue={onContinue} skip={false}>
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
