import { Button, Divider } from '@material-ui/core'
import React, { Dispatch, SetStateAction } from 'react'
import BoxWrapper from '../../../../../common/boxWrapper/BoxWrapper'
import AddIcon from '@material-ui/icons/Add';
interface Props {
    setActive: Dispatch<SetStateAction<string>>
}
const Education = ({ setActive }: Props) => {
    return (
        <div className="grid grid-cols-7 justify-center mt-8">
            <div className="col-start-3 col-span-3">
                <BoxWrapper title="Education" subtitle="Add your education, you can add multiple educations">
                    <div className="mt-7">

                        <Button variant="outlined" className="w-full" color="primary">
                            Add New <AddIcon style={{ width: 18 }} />
                        </Button>
                    </div>
                    <div className="my-7">
                        <Divider />
                    </div>
                    <Button variant="contained" className="w-full" color="primary" disableElevation >
                        Continue
                    </Button>
                    <div className="mt-5 flex justify-between">
                        <Button onClick={() => setActive('career')}>Back</Button>
                        <Button onClick={() => setActive('education')}>Skip</Button>
                    </div>
                </BoxWrapper>
            </div>
        </div>
    )
}

export default Education
