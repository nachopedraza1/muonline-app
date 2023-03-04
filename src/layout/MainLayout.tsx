import { Grid, Container } from '@mui/material';


export const MainLayout: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
    return (
        <Grid
            container
            sx={{
                pt: 5,
                backgroundImage: "url(/assets/images/fon-bg-bottom.jpg)",
                backgroundPosition: "bottom center",
                backgroundSize: "cover",
            }}>
            <Container maxWidth="lg">
                {children}
            </Container>
        </Grid>
    )
}
