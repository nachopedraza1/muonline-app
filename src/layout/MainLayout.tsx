import { Grid, Container } from '@mui/material';
import { Footer } from '../ui/Footer';


export const MainLayout: React.FC<{ children: JSX.Element | JSX.Element[], className?: string }> = ({ children, className }) => {
    return (
        <Grid container className={className}>
            <Container maxWidth="lg">
                {children}
            </Container>
            <Footer />
        </Grid >
    )
}
