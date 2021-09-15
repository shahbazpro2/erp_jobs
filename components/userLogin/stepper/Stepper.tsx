import { NoSsr } from '@material-ui/core'
import React, { useState } from 'react'
import HorizontalStepper from '../../common/stepper/HorizontalStepper'

const steps = ["Create an account", "Build your profile", "Upload your CV"];
const Stepper = () => {
    const [activeStep, setActiveStep] = useState(0)
    return (
        <NoSsr>
            <HorizontalStepper activeStep={activeStep} steps={steps} />
        </NoSsr>
    )
}

export default Stepper
