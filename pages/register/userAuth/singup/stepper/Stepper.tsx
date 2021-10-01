/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client';
import { DropdownContext } from '@context/DropdownContext';
import React, { createContext, useEffect, useState } from 'react'
import { useAppSelector } from '@redux/Store';
import Spinner from '@components/common/spinner/Spinner';
import HorizontalStepper from '@components/common/stepper/HorizontalStepper'
import Step1 from './stepperContent/step1/Step1';
import Step2 from './stepperContent/step2/Step2';
import { AllJobtitles } from '@graphql/queries/common/AllJobTitles';

const steps = ["Create an account", "Build your profile", "Upload your CV"];
export const StepperContext = createContext({
    handleActiveStep: (step: number) => { }
})
const Stepper = () => {
    const [getAllJobtitles, { data }] = useLazyQuery(AllJobtitles)
    const { user }: any = useAppSelector(state => state.authReducer)
    const [loading, setLoading] = useState(true)
    const [activeStep, setActiveStep] = useState(0)


    const StepperContextValue = {
        handleActiveStep: (step: number) => {
            setActiveStep(step)
        }
    }

    const ContextValue = {
        jobTitles: data?.allJobtitles,

    }


    useEffect(() => {
        getAllJobtitles()
        if (Object.keys(user).length && !user.isCompleted)
            setActiveStep(1)
        setLoading(false)
    }, [user])

    const getStepperContent = () => {
        switch (activeStep) {
            case 0:
                return <Step1 />;
            case 1:
                return <DropdownContext.Provider value={ContextValue}>
                    <StepperContext.Provider value={StepperContextValue}>
                        <Step2 />
                    </StepperContext.Provider>
                </DropdownContext.Provider>
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
