// src/components/weeks/week1/Exercise2.tsx
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { CopyBlock, dracula } from 'react-code-blocks';

const Exercise2: React.FC = () => {
    return (
        <Box my={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                Exercise 2: Creating the `generate_planet` Function
            </Typography>
            <Typography variant="body1" paragraph>
                In this exercise, you will define a function called `generate_planet` that creates a planet with random attributes. These attributes include:
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="1. Name: A randomly generated planet name." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="2. Size: A positive float representing the planet's size." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="3. Color: A randomly selected color from a predefined list." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="4. Orbit Distance: A positive float representing the distance from the star." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="5. Orbital Period: A positive float representing the time it takes for the planet to complete one orbit around the star." />
                </ListItem>
            </List>
            <Typography variant="body1" paragraph>
                Use the `random` module to generate random values for these attributes. Make sure the values meet the following requirements:
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="1. The name should be generated using your `generate_planet_name` function." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="2. The size, orbit distance, and orbital period should be positive floats." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="3. The color should be randomly chosen from a predefined list of color names using `random.choice`." />
                </ListItem>
            </List>
            <Typography variant="body1" paragraph>
                Here is a template to get you started:
            </Typography>
            <CopyBlock
                text={`
import random

def generate_planet():
    # Generate random attributes for the planet
    # Ensure size, orbit distance, and orbital period are positive
    pass
                `}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Typography variant="body1" paragraph>
                Ensure you return the generated planet dictionary at the end of your function.
            </Typography>
            <Typography variant="body1" paragraph>
                Once you have implemented the function, you can run the unit tests to verify its correctness. Open a terminal in your project's root directory and run the following command:
            </Typography>
            <CopyBlock
                text={`python -m unittest discover -s tests -p 'test_main.py' -k test_generate_planet`}
                language="python"
                theme={dracula}
                codeBlock
            />
        </Box>
    );
};

export default Exercise2;
