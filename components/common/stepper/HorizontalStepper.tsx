import React from 'react';
import classNames from 'classnames';
import { Step, Stepper, StepLabel, StepConnector } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';

const ColorlibConnector = withStyles({
    alternativeLabel: {
        zIndex: 111
    },

    line: {
        border: 'none'
    },
})(StepConnector);


const useStyles = makeStyles((theme: any) => ({
    root: {
        background: 'transparent',
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));


interface Props {
    steps: string[],
    activeStep: number
}
export default function HorizontalStepper({ steps, activeStep }: Props) {
    const classes = useStyles();

    return (
        <div className="max-w-[1100px] relative m-auto">

            <Stepper className={classes.root} activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />}>

                {steps.map((label) => (
                    <Step key={label} id="step">
                        <StepLabel>
                            <div className={classes.label}>
                                {label}
                            </div>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            {

                steps.map((st, index) => {

                    if (index < steps.length - 1) {
                        return <div key={index} className={classNames(`dotted-spaced dotted-spaced${index + 1}`, { 'dotted-active': activeStep >= index + 1 })}></div>
                    }
                })


            }
        </div>
    );
}
