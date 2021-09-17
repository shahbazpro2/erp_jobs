import { Button, Divider } from '@material-ui/core'
import React, { Dispatch, SetStateAction } from 'react'
import BoxWrapper from '../../../../../common/boxWrapper/BoxWrapper'
import AddIcon from '@material-ui/icons/Add';
interface Props {
    setActive: Dispatch<SetStateAction<string>>
}
const Career = ({ setActive }: Props) => {
    return (
        <div className="grid grid-cols-7 justify-center mt-8">
            <div className="col-start-3 col-span-3">
                <BoxWrapper title="Career Journey" subtitle="Add your career journey, you can add multiple careers.">
                    <div className="mt-7">

                        <Button variant="outlined" className="w-full" color="primary">
                            Add New <AddIcon style={{ width: 18 }} />
                        </Button>
                    </div>
                    <div className="my-7">
                        <Divider />
                    </div>
                    <Button onClick={() => setActive('education')} variant="contained" className="w-full" color="primary" disableElevation >
                        Continue
                    </Button>
                    <div className="mt-5 text-center">
                        <Button onClick={() => setActive('basic')}>Back</Button>
                    </div>
                </BoxWrapper>
            </div>
        </div>
    )
}

export default Career
