// src/components/weeks/week1/Introduction.tsx
import React from 'react';
import {Typography, Box, Button} from '@mui/material';
import JSZip from "jszip";
import { saveAs } from 'file-saver';
import {CopyBlock, dracula} from "react-code-blocks";


const Introduction: React.FC = () => {
    const downloadZip = async () => {
        const zip = new JSZip();
        const week1CodeFolder = zip.folder('week1_code');

        // List of files to include in the zip
        const files = [
            'week1_code/src/__init__.py',
            'week1_code/src/main.py',
            'week1_code/tests/__init__.py',
            'week1_code/tests/test_main.py'
        ];

        // Fetch each file and add to the zip
        for (const filePath of files) {
            const response = await fetch(`/${filePath}`);
            if (response.ok) {
                const content = await response.text();
                week1CodeFolder?.file(filePath.split('/').slice(-2).join('/'), content);
            } else {
                console.error(`Failed to fetch ${filePath}`);
            }
        }

        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, 'week1_code.zip');
    };

    return (
        <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
                Week 1 Assignment: Basic Planet Generation
            </Typography>
            <Typography variant="body1" paragraph>
                In this assignment, you will create a simple Python script to generate a list of planets with randomly generated attributes. Follow the steps below to complete the assignment and test your code.
            </Typography>
            <Typography variant="body1" paragraph>
                To get started, download the assignment code files:
            </Typography>
            <Button variant="contained" color="primary" onClick={downloadZip}>
                Download Assignment Code Files
            </Button>
            <Typography variant="body1" paragraph>
                The downloaded zip file will contain the following file:
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom>
                main.py
            </Typography>
            <CopyBlock
                text={`
import random

# Define the generate_planet function
# Define the generate_solar_system function
                `}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Typography variant="body1" paragraph>
                Please modify the `main.py` file according to the instructions provided in the exercises below.
            </Typography>
        </Box>
    );
};

export default Introduction;
