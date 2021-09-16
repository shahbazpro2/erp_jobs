import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { StepConnector } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 17,
        zIndex: 111
    },

    line: {
        border: 'none'
    },
})(StepConnector);


const useStyles = makeStyles((theme) => ({
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
                    <Step key={label}>
                        <StepLabel >
                            <div className={classes.label}>
                                {label}
                            </div>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="dotted-spaced"></div>
        </div>
    );
}
