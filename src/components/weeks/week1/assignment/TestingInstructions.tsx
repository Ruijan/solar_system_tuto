// src/components/weeks/week1/TestingInstructions.tsx
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, Paper } from '@mui/material';
import { CopyBlock, dracula } from 'react-code-blocks';

const TestingInstructions: React.FC = () => {
    return (
        <Box my={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                Testing Your Code
            </Typography>
            <Typography variant="body1" paragraph>
                To test your code, you can use the command line. Follow the steps below to run your Python script and verify that it works correctly.
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="1. Open a terminal or command prompt." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="2. Navigate to the directory where your `planet_generation.py` file is located." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="3. Run the following command to execute your script:" />
                </ListItem>
            </List>
            <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
                <CopyBlock
                    text="python planet_generation.py"
                    language="bash"
                    theme={dracula}
                    codeBlock
                />
            </Paper>
            <Typography variant="body1" paragraph>
                You should see the list of generated planets printed in the terminal. Verify that the output matches the expected format and that the attributes are generated correctly.
            </Typography>
        </Box>
    );
};

export default TestingInstructions;
