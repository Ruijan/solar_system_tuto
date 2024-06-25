// src/components/weeks/week1/Lecture3Questionnaire.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Questionnaire from '../../Questionnaire';

const questions = [
    {
        question: 'Which data structure is ordered and changeable?',
        options: ['List', 'Dictionary', 'Set', 'Tuple'],
        answer: 'List',
    },
    {
        question: 'How do you access the value associated with the key "Earth" in a dictionary called planet_moons?',
        options: ['planet_moons["Earth"]', 'planet_moons.Earth', 'planet_moons->Earth', 'planet_moons{Earth}'],
        answer: 'planet_moons["Earth"]',
    },
    {
        question: 'Which of the following is a key-value pair?',
        options: ['[1, 2, 3]', '("Mercury", 0)', '{ "Mercury": 0 }', '{1, 2, 3}'],
        answer: '{ "Mercury": 0 }',
    },
    {
        question: 'How do you add an item to a list called planets?',
        options: ['planets.add("Pluto")', 'planets.append("Pluto")', 'planets.insert("Pluto")', 'planets["Pluto"] = True'],
        answer: 'planets.append("Pluto")',
    },
];

const Lecture3Questionnaire: React.FC = () => {
    const navigate = useNavigate();

    const handleSuccess = () => {
        const completionStatus = JSON.parse(localStorage.getItem('completionStatus') || '{}');
        completionStatus['lecture3Questionnaire'] = true;
        localStorage.setItem('completionStatus', JSON.stringify(completionStatus));
        navigate('/week1');
    };

    return <Questionnaire questions={questions} onSuccess={handleSuccess} />;
};

export default Lecture3Questionnaire;
