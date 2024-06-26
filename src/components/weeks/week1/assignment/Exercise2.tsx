// src/components/weeks/week1/Exercise2.tsx
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { CopyBlock, dracula } from 'react-code-blocks';

const Exercise2: React.FC = () => {
    return (
        <Box my={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                Exercise 2: Create the `generate_solar_system` Function
            </Typography>
            <Typography variant="body1" paragraph>
                In this exercise, you will define a function called `generate_solar_system` that generates a list of planets.
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="1. Define the `generate_solar_system` function in your `planet_generation.py` file." />
                </ListItem>
            </List>
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
        </Box>
    );
};

export default Exercise2;
