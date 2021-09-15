import { Button, NoSsr, TextField } from '@material-ui/core'
import React from 'react'
import AuthWrapper from '../../../../../common/authWrapper/AuthWrapper'

const Step1 = () => {
    return (
        <div className="grid grid-cols-6 justify-center">
            <div className="col-start-3 col-span-2">
                <AuthWrapper>
                    <div className="mt-6">
                        <div className="grid gap-5">
                            <TextField
                                id="outlined-name"
                                label="Your Name"
                                variant="outlined"
                                className="w-full"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-name"
                                label="Your Email"
                                variant="outlined"
                                className="w-full"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-name"
                                label="Enter Password"
                                variant="outlined"
                                className="w-full"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <Button variant="contained" color="primary" disableElevation>
                                Continue
                            </Button>
                        </div>
                    </div>
                </AuthWrapper>
            </div>
        </div>
    )
}

export default Step1
