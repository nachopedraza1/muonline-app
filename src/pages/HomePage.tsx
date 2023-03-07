import { Box, Grid, Container, Typography } from '@mui/material';
import { Footer } from "../ui/Footer";
import { ServerInfo } from "../components";
import { Banner } from '../components/Banner';
import { MainLayout } from '../layout/MainLayout';

export const HomePage: React.FC = () => {
    return (
        <>
            <Banner />
            <Box textAlign="center">
                <img src="/assets/images/scroll-icon.png" width="500px" />
            </Box>
            <MainLayout>
                <Grid container justifyContent="space-between" spacing={5}>
                    <Grid item xs={4} className="middle-menu">
                        <Typography>DROP LIST</Typography>
                        <img src="/assets/images/img1.png" className="middle-menu__img" alt="" width="100%" />
                    </Grid>
                    <Grid item xs={4} className="middle-menu">
                        <Typography>CHARACTER</Typography>
                        <img src="/assets/images/img2.png" className="middle-menu__img" alt="" width="100%" />
                    </Grid>
                    <Grid item xs={4} className="middle-menu">
                        <Typography>SUPPORT</Typography>
                        <img src="/assets/images/img3.png" className="middle-menu__img" alt="" width="100%" />
                    </Grid>
                </Grid>
                <ServerInfo />
                <Footer />
            </MainLayout >
        </>
    )
}

