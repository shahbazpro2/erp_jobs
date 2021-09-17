import React, { Dispatch, SetStateAction } from 'react'
import { Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddItemsWrapper from '../../../../../common/addItemsWrapper/AddItemsWrapper';
interface Props {
    setActive: Dispatch<SetStateAction<string>>
}
const Education = ({ setActive }: Props) => {
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
        <div className="grid grid-cols-7 justify-center mt-8">
            <div className="col-start-3 col-span-3">
                <AddItemsWrapper title="Education" subtitle="Add your education, you can add multiple educations" onBack={onBack} onSkip={onSkip} onContinue={onContinue}>
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

export default Education
