import React, { Dispatch, SetStateAction } from 'react'
import AddItemsWrapper from '../../../../../common/addItemsWrapper/AddItemsWrapper';
import { Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
interface Props {
    setActive: Dispatch<SetStateAction<string>>
}
const Career = ({ setActive }: Props) => {
    const onBack = () => {
        setActive('basic')
    }

    const onContinue = () => {
        setActive('education')
    }
    return (
        <div className="grid grid-cols-7 justify-center mt-8">
            <div className="col-start-3 col-span-3">
                <AddItemsWrapper title="Career Journey" subtitle="Add your career journey, you can add multiple careers." onBack={onBack} onContinue={onContinue} skip={false}>
                    <div className="mt-7">
                        <Button variant="outlined" className="w-full" color="primary">
                            Add New <AddIcon style={{ width: 18 }} />
                        </Button>
                    </div>
                    <div className="my-7">
                        <Divider />
                    </div>
                </AddItemsWrapper>

            </div>
        </div>
    )
}

export default Career
