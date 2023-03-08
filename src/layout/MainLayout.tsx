import { Grid, Container } from '@mui/material';


export const MainLayout: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
    return (
        <Grid
            container
            sx={{
                pt: 5,
                backgroundImage: "url(/assets/images/fon-bg-bottom.jpg)",
                backgroundPosition: "bottom center",
                backgroundSize: "clamp(1600px, 80%, 1500px) auto",
                backgroundRepeat:"no-repeat"
            }}>
            <Container maxWidth="lg">
                {children}
            </Container>
        </Grid>
    )
}
