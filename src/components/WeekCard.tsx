// src/components/Week1Card.tsx

import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export interface WeekItem {
    title: string;
    description: string;
    link: string;
    buttonName: string;
}

const WeekCard: React.FC<{ item: WeekItem }> = ({ item }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {item.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={RouterLink} to={item.link}>
                    {item.buttonName}
                </Button>
            </CardActions>
        </Card>
    );
};

export default WeekCard;
