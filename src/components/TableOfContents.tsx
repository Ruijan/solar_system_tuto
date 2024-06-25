// src/components/TableOfContents.tsx

import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

interface TocItem {
    id: string;
    text: string;
}

const TableOfContents: React.FC<{ headings: TocItem[] }> = ({ headings }) => {
    return (
        <Box my={4}>
            <Typography variant="h6" component="h3" gutterBottom>
                Table of Contents
            </Typography>
            <List>
                {headings.map((heading) => (
                    <ListItem key={heading.id} component="a" href={`#${heading.id}`}>
                        <ListItemText primary={heading.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default TableOfContents;
