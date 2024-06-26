// src/components/Layout.tsx
import React, {ReactNode} from 'react';
import { Container, Box } from '@mui/material';
import BreadcrumbsNav from "./BreadCrumbsNav";

interface LayoutProps {
    children: ReactNode;
}

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Container maxWidth="md">
            <Box my={4}>
                <BreadcrumbsNav />
                {children}
            </Box>
        </Container>
    );
};

export default PageLayout;
