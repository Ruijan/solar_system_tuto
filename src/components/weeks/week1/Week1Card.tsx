// src/components/Week1Card.tsx

import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Week1Card: React.FC = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Week 1: Refresher on Basics
                </Typography>
                <Typography variant="body2" component="p">
                    Review Python basics, control structures, and basic data structures. Implement a basic procedural planet generation.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={RouterLink} to="/week1">
                    Go to Week 1
                </Button>
            </CardActions>
        </Card>
    );
};

export default Week1Card;
