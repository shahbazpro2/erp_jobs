import { Button, TextField } from '@material-ui/core'
import React, { Dispatch, SetStateAction } from 'react'
import AuthWrapper from '../../../../../common/authWrapper/AuthWrapper'

interface Props {
    setActiveStep: Dispatch<SetStateAction<number>>
}

const Step1 = ({ setActiveStep }: Props) => {
    return (
        <div className="grid grid-cols-6 justify-center mt-8">
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
                            <Button variant="contained" color="primary" disableElevation onClick={() => setActiveStep(1)}>
                                Continue
                            </Button>
                        </div>
                        <div className="my-6">
                            <div className="divider">
                                <span>or</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 social-links">
                            <div className="social-box">
                                google
                            </div>
                            <div className="social-box">
                                google
                            </div>
                            <div className="social-box">
                                google
                            </div>
                        </div>

                    </div>
                </AuthWrapper>
                <div className="text-xl mt-6 text-center text-[#92929D] tracking-[0.11px]">
                    Already have an account?<a href="#" className="primary-clr"> . Sign In</a>
                </div>
            </div>
        </div>
    )
}

export default Step1
