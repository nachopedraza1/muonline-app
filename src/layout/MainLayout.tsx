import { Grid, Container } from '@mui/material';


export const MainLayout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
    return (
        <Grid container pt={5}>
            <Container maxWidth="lg">
                {children}
            </Container>
        </Grid >
    )
}
