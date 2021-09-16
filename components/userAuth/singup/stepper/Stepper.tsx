import React, { useState } from 'react'
import HorizontalStepper from '../../../common/stepper/HorizontalStepper'
import Step1 from './stepperContent/step1/Step1';

const steps = ["Create an account", "Build your profile", "Upload your CV"];
const Stepper = () => {
    const [activeStep, setActiveStep] = useState(0)

    const getStepperContent = () => {
        switch (activeStep) {
            case 0:
                return <Step1 setActiveStep={setActiveStep} />;
            case 1:
                return 'What is an ad group anyways?';
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'Unknown stepIndex';
        }
    }
    return (
        <>
            <HorizontalStepper activeStep={activeStep} steps={steps} />
            {getStepperContent()}
        </>
    )
}

export default Stepper
