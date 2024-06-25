// src/components/VerticalLinearStepper.tsx

import React from 'react';
import { Stepper, Step, StepLabel, StepContent, Typography, Box, Button, StepButton } from '@mui/material';

interface SubStepItem {
    id: string;
    text: string;
}

interface StepItem {
    id: string;
    text: string;
    subSteps?: SubStepItem[];
}

const VerticalLinearStepper: React.FC<{ steps: StepItem[] }> = ({ steps }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [activeSubStep, setActiveSubStep] = React.useState<number | undefined>((steps.length > 0 && steps[0].subSteps) ? 0 : undefined);

    const handleNext = () => {
        console.log(activeStep, activeSubStep, steps[activeStep].subSteps?.length)
        if (activeSubStep !== undefined && activeSubStep < (steps[activeStep].subSteps?.length || 0) - 1) {
            setActiveSubStep(activeSubStep + 1);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setActiveSubStep((steps.length > 0 && steps[activeStep].subSteps) ? 0 : undefined);
        }
    };

    const handleBack = () => {
        if (activeSubStep !== undefined && activeSubStep > 0) {
            setActiveSubStep(activeSubStep - 1);
        } else if (activeSubStep === 0) {
            setActiveSubStep(undefined);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
            let subSteps = steps[activeStep - 1].subSteps;
            setActiveSubStep(steps[activeStep - 1] && subSteps ? subSteps.length - 1 : undefined);
        }
    };

    const handleReset = () => {
        setActiveStep(0);
        setActiveSubStep((steps.length > 0 && steps[0].subSteps) ? 0 : undefined);
    };

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.id}>
                        <StepButton onClick={() => { setActiveStep(index); setActiveSubStep(undefined); }}>
                            <StepLabel>{step.text}</StepLabel>
                        </StepButton>
                        <StepContent>
                            {step.subSteps && (
                                <Stepper activeStep={activeSubStep} orientation="vertical">
                                    {step.subSteps.map((subStep, subIndex) => (
                                        <Step key={subStep.id}>
                                            <StepButton onClick={() => setActiveSubStep(subIndex)}>
                                                <StepLabel>{subStep.text}</StepLabel>
                                            </StepButton>
                                            <StepContent>
                                                <Box sx={{ mb: 2 }}>
                                                    <Button
                                                        variant="contained"
                                                        onClick={handleNext}
                                                        sx={{ mt: 1, mr: 1 }}
                                                        href={`#${subStep.id}`}
                                                    >
                                                        {subIndex === (step.subSteps?.length || 0) - 1 && index === steps.length - 1 ? 'Finish' : 'Continue'}
                                                    </Button>
                                                    <Button
                                                        disabled={index === 0 && subIndex === 0}
                                                        onClick={handleBack}
                                                        sx={{ mt: 1, mr: 1 }}
                                                    >
                                                        Back
                                                    </Button>
                                                </Box>
                                            </StepContent>
                                        </Step>
                                    ))}
                                </Stepper>
                            )}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && activeSubStep === undefined && (
                <Box sx={{ mt: 2 }}>
                    <Typography>All steps completed - you're finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default VerticalLinearStepper;
