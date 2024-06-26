// src/components/weeks/week1/AssignmentInstructions.tsx

import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Paper } from '@mui/material';
import { CopyBlock, dracula } from 'react-code-blocks';
import Introduction from "./assignment/Instructions";
import Exercise1 from "./assignment/Exercise1";
import Exercise2 from "./assignment/Exercise2";
import TestingInstructions from "./assignment/TestingInstructions";
import Exercise3 from "./assignment/Exercise3";



const AssignmentInstructions: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Introduction />
                <Exercise1 />
                <Exercise2 />
                <Exercise3 />
                <TestingInstructions />
            </Box>
        </Container>
    );
};

export default AssignmentInstructions;
