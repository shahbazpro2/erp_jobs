import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../../redux/Store';
import Spinner from '../../../common/spinner/Spinner';
import HorizontalStepper from '../../../common/stepper/HorizontalStepper'
import Step1 from './stepperContent/step1/Step1';
import Step2 from './stepperContent/step2/Step2';

const steps = ["Create an account", "Build your profile", "Upload your CV"];
const Stepper = () => {
    const { user }: any = useAppSelector(state => state.authReducer)
    const [loading, setLoading] = useState(true)
    const [activeStep, setActiveStep] = useState(0)


    useEffect(() => {
        if (Object.keys(user).length && !user.isCompleted)
            setActiveStep(1)
        setLoading(false)
    }, [user])

    const getStepperContent = () => {
        switch (activeStep) {
            case 0:
                return <Step1 />;
            case 1:
                return <Step2 setActiveStep={setActiveStep} />;
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'Unknown stepIndex';
        }
    }
    return (
        <>
            {loading ? <Spinner /> :
                <>
                    <div className="mb-12">
                        <HorizontalStepper activeStep={activeStep} steps={steps} />
                    </div>
                    {getStepperContent()}
                </>
            }
        </>
    )
}

export default Stepper
