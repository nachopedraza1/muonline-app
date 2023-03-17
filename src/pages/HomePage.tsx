import { Link } from 'react-router-dom';

import { MainLayout } from '../layout/MainLayout';
import { Banner } from '../components/Banner';
import { Box, Grid, Typography } from '@mui/material';


export const HomePage: React.FC = () => {
    return (
        <>
            <Banner />
            <Box textAlign="center">
                <img src="/assets/images/scroll-icon.png" width="500px" />
            </Box>
            <MainLayout className="bgGuides">
                <Grid container justifyContent="space-between" spacing={5}>
                    <Grid item xs={4} className="middle-menu">
                        <Typography>DROP LIST</Typography>
                        <img src="/assets/images/img1.png" className="middle-menu__img" alt="" width="100%" />
                    </Grid>
                    <Grid item xs={4} className="middle-menu" component={Link} to="/characters">
                        <Typography>CHARACTER</Typography>
                        <img src="/assets/images/img2.png" className="middle-menu__img" alt="" width="100%" />
                    </Grid>
                    <Grid item xs={4} className="middle-menu">
                        <Typography>SUPPORT</Typography>
                        <img src="/assets/images/img3.png" className="middle-menu__img" alt="" width="100%" />
                    </Grid>
                </Grid>
            </MainLayout >
        </>
    )
}

