import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useFindMob } from '../hooks/useFindMob';

import { MainLayout } from '../layout/MainLayout';
import { SidebarGuide, MainGuide } from '../components';
import { Grid, Typography } from '@mui/material';


export const ViewGuide: React.FC = () => {

    const { guides } = useFindMob();

    return (
        <MainLayout className="bgGuides">
            <Grid container justifyContent="space-between" mb={10}>

                <Grid item xs={12} textAlign="center">
                    <Typography
                        variant='subtitle1'
                        fontSize={45}
                        textAlign="center"
                        m="50px 0px 35px 0px"
                    >
                        Guía del aventurero
                    </Typography>
                </Grid>

                <Grid item xs={3} mt={3.4}>
                    <SidebarGuide />
                </Grid>

                <Grid item xs={8.8}>
                    <MainGuide guides={guides} />
                </Grid>

            </Grid>
        </MainLayout >
    )
}