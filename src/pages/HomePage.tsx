import { Banner } from "../components/Banner"
import { Header } from "../ui/Header"
import { Box, Grid, Container, Typography } from '@mui/material';
import { Footer } from "../ui/Footer";
import { ServerInfo } from "../components";

export const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <Box textAlign="center">
                <img src="assets\images\scroll-icon.png" width="500px" />
            </Box>
            <Grid
                container
                sx={{
                    pt: 5,
                    backgroundImage: "url(assets/images/fon-bg-bottom.jpg)",
                    backgroundPosition: "bottom center",
                    backgroundSize: "cover",
                }}>
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-between" spacing={5}>
                        <Grid item xs={4} className="middle-menu">
                            <Typography>DROP LIST</Typography>
                            <img src="assets/images/img1.png" className="middle-menu__img" alt="" width="100%" />
                            <img src="assets/images/title_arrow_down.png" className="middle-menu__arrow" alt="" />
                        </Grid>
                        <Grid item xs={4} className="middle-menu">
                            <Typography>CHARACTER</Typography>
                            <img src="assets/images/img2.png" className="middle-menu__img" alt="" width="100%" />
                            <img src="assets/images/title_arrow_down.png" className="middle-menu__arrow" alt="" />
                        </Grid>
                        <Grid item xs={4} className="middle-menu">
                            <Typography>SUPPORT</Typography>
                            <img src="assets/images/img3.png" className="middle-menu__img" alt="" width="100%" />
                            <img src="assets/images/title_arrow_down.png" className="middle-menu__arrow" alt="" />
                        </Grid>
                    </Grid>
                    <ServerInfo />
                </Container>
                <Footer />
            </Grid >
        </>
    )
}

