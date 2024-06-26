// src/components/weeks/week1/Lecture1Questionnaire.tsx

import React from 'react';
import Questionnaire from '../../Questionnaire';
import {useNavigate} from "react-router-dom";

const questions = [
    {
        question: 'What should be the type of the variable defining the name of the planet?',
        options: ['int', 'float', 'string', 'bool'],
        answer: 'string',
    },
    {
        question: 'What should be the type of the variable defining the velocity?',
        options: ['int', 'float', 'string', 'bool'],
        answer: 'float',
    },
    {
        question: 'What is the correct type for a variable representing the number of moons?',
        options: ['int', 'float', 'string', 'bool'],
        answer: 'int',
    },
    {
        question: 'Which type would be best for a variable indicating if a planet has rings?',
        options: ['int', 'float', 'string', 'bool'],
        answer: 'bool',
    },
];
const Lecture1Questionnaire: React.FC = () => {
    const navigate = useNavigate();

    const handleSuccess = () => {
        const completionStatus = JSON.parse(localStorage.getItem('completionStatus') || '{}');
        completionStatus['lecture1Questionnaire'] = true;
        localStorage.setItem('completionStatus', JSON.stringify(completionStatus));
        navigate('/week1/lecture2');
    };

    return <Questionnaire questions={questions} onSuccess={handleSuccess}/>;
};

export default Lecture1Questionnaire;
