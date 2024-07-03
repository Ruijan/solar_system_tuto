// src/components/weeks/week1/Exercise2.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import { CopyBlock, dracula } from 'react-code-blocks';

const Exercise3: React.FC = () => {
    return (
        <Box my={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                Exercise 3: Create the `generate_solar_system` Function
            </Typography>
            <Typography variant="body1" paragraph>
                In this exercise, you will define a function called `generate_solar_system` that generates a list of planets.
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom>
                Template Code
            </Typography>
            <CopyBlock
                text={`
def generate_solar_system(num_planets=8):
    # Create a list to hold the planets
    # Generate the specified number of planets using the generate_planet function
    # Return the list of planets
    pass
                `}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Typography variant="body1" paragraph>
                Once you have implemented the function, you can run the unit tests to verify its correctness. Open a terminal in your project's root directory and run the following command:
            </Typography>
            <CopyBlock
                text={`python -m unittest discover -s tests -p 'test_main.py' -k test_generate_solar_system`}
                language="python"
                theme={dracula}
                codeBlock
            />
        </Box>
    );
};

export default Exercise3;
