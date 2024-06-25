// src/components/Questionnaire.tsx

import React, { useState } from 'react';
import { Container, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

interface Question {
    question: string;
    options: string[];
    answer: string;
}

interface QuestionnaireProps {
    questions: Question[];
    onSuccess: () => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ questions, onSuccess  }) => {
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
    const [showResults, setShowResults] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);

    const handleChange = (questionIndex: number, option: string) => {
        setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
    };

    const handleSubmit = () => {
        setShowResults(true);
        const allCorrect = questions.every((q, index) => selectedAnswers[index] === q.answer);
        setIsSuccessful(allCorrect);
        if (allCorrect) {
            onSuccess();
        }
    };

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Lecture 1 Questionnaire
                </Typography>
                {questions.map((q, index) => (
                    <Box key={index} my={2}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">{q.question}</FormLabel>
                            <RadioGroup
                                name={`question-${index}`}
                                value={selectedAnswers[index] || ''}
                                onChange={(e) => handleChange(index, e.target.value)}
                            >
                                {q.options.map((option, i) => (
                                    <FormControlLabel key={i} value={option} control={<Radio />} label={option} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                        {showResults && (
                            <Typography variant="body1" color={selectedAnswers[index] === q.answer ? 'green' : 'red'}>
                                {selectedAnswers[index] === q.answer ? 'Correct' : `Incorrect, the correct answer is: ${q.answer}`}
                            </Typography>
                        )}
                    </Box>
                ))}
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default Questionnaire;
