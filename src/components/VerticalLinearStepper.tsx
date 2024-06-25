// src/components/VerticalLinearStepper.tsx

import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, StepContent, Typography, Box, Button, StepButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface SubObjective {
    id: string;
    text: string;
    route: string;
}

interface Objective {
    id: string;
    text: string;
    subObjectives?: SubObjective[];
}

interface VerticalLinearStepperProps {
    objectives: Objective[];
}

function getCurrentStepIndex(objectives: Objective[], completionStatus: { [key: string]: boolean }) {
    for (let i = 0; i < objectives.length; i++) {
        if (!completionStatus[objectives[i].id]) {
            return i;
        }
    }
    return objectives.length;
}

const VerticalLinearStepper: React.FC<VerticalLinearStepperProps> = ({ objectives }) => {
    const [activeStep, setActiveStep] = useState(getCurrentStepIndex(objectives, JSON.parse(localStorage.getItem('completionStatus') || '{}')));
    const [activeSubStep, setActiveSubStep] = useState<number | undefined>(undefined);
    const [completionStatus, setCompletionStatus] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        // Load completion status from localStorage
        const storedStatus = JSON.parse(localStorage.getItem('completionStatus') || '{}');
        setCompletionStatus(storedStatus);
    }, []);

    const handleNext = () => {
        if (activeSubStep !== undefined && activeSubStep < (objectives[activeStep].subObjectives?.length || 0) - 1) {
            setActiveSubStep(activeSubStep + 1);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setActiveSubStep(undefined);
        }
    };

    const handleBack = () => {
        if (activeSubStep !== undefined && activeSubStep > 0) {
            setActiveSubStep(activeSubStep - 1);
        } else if (activeSubStep === 0) {
            setActiveSubStep(undefined);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
            let subObjectives = objectives[activeStep - 1]?.subObjectives?.length;
            setActiveSubStep(objectives[activeStep - 1] && subObjectives ? subObjectives : undefined);
        }
    };

    const handleReset = () => {
        setActiveStep(0);
        setActiveSubStep(undefined);
        let completionStatus = JSON.parse(localStorage.getItem('completionStatus') || '{}');
        for (let key in completionStatus) {
            completionStatus[key] = false;
        }
        localStorage.setItem('completionStatus', JSON.stringify(completionStatus));
        setCompletionStatus(completionStatus);
    };

    return (
        <Box>
            <Stepper activeStep={activeStep} orientation="vertical">
                {objectives.map((objective, index) => (
                    <Step key={objective.id} completed={completionStatus[objective.id]}>
                        <StepButton onClick={() => { setActiveStep(index); setActiveSubStep(undefined); }}>
                            <StepLabel>{objective.text}</StepLabel>
                        </StepButton>
                        <StepContent>
                            {objective.subObjectives && objective.subObjectives.length > 0 && (
                                <Stepper activeStep={activeSubStep} orientation="vertical">
                                    {objective.subObjectives.map((subObjective, subIndex) => (
                                        <Step key={subObjective.id} completed={completionStatus[subObjective.id]}>
                                            <StepButton onClick={() => setActiveSubStep(subIndex)}>
                                                <StepLabel>{subObjective.text}</StepLabel>
                                            </StepButton>
                                            <StepContent>
                                                <Box sx={{ mb: 2 }}>
                                                    <Button
                                                        variant="contained"
                                                        onClick={handleNext}
                                                        sx={{ mt: 1, mr: 1 }}
                                                        component={RouterLink}
                                                        to={subObjective.route}
                                                    >
                                                        {subIndex === (objective.subObjectives?.length || 0) - 1 && index === objectives.length - 1 ? 'Finish' : 'Continue'}
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
            {activeStep === objectives.length && activeSubStep === undefined && (
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
