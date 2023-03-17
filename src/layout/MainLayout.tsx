import { Grid, Container } from '@mui/material';


export const MainLayout: React.FC<{ children: JSX.Element | JSX.Element[], className?: string }> = ({ children, className }) => {
    return (
        <Grid container className={className}>
            <Container maxWidth="lg">
                {children}
            </Container>
        </Grid >
    )
}
