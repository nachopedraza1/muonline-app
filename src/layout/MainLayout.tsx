import { Grid, Container } from '@mui/material';
import { useEffect } from 'react';
import { Footer } from '../ui/Footer';


export const MainLayout: React.FC<{ children: JSX.Element | JSX.Element[], className?: string }> = ({ children, className }) => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [children]);


    return (
        <Grid container className={className}>
            <Container maxWidth="lg">
                {children}
            </Container>
            <Footer />
        </Grid >
    )
}
