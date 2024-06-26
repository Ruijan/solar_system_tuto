// src/components/weeks/week1/Lecture2Questionnaire.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Questionnaire from '../../Questionnaire';

const questions = [
    {
        question: 'Which keyword is used to start a conditional statement in Python?',
        options: ['if', 'for', 'while', 'def'],
        answer: 'if',
    },
    {
        question: 'What will the following code output?\n\nx = 10\nif x > 5:\n    print("Greater")\nelse:\n    print("Smaller")',
        options: ['Greater', 'Smaller', 'Error', 'None'],
        answer: 'Greater',
    },
    {
        question: 'Which keyword is used to start a loop in Python?',
        options: ['if', 'for', 'while', 'loop'],
        answer: 'for',
    },
    {
        question: 'What will the following code output?\n\ncount = 3\nwhile count > 0:\n    print(count)\n    count -= 1',
        options: ['3\n2\n1', '3\n2\n1\n0', 'Error', 'None'],
        answer: '3\n2\n1',
    },
];

const Lecture2Questionnaire: React.FC = () => {
    const navigate = useNavigate();

    const handleSuccess = () => {
        const completionStatus = JSON.parse(localStorage.getItem('completionStatus') || '{}');
        completionStatus['lecture2Questionnaire'] = true;
        localStorage.setItem('completionStatus', JSON.stringify(completionStatus));
        navigate('/week1/lecture3');
    };

    return <Questionnaire questions={questions} onSuccess={handleSuccess} />;
};

export default Lecture2Questionnaire;
