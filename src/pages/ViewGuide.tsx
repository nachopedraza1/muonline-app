import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useCustomSelector } from '../hooks/useRedux';
import { updateGuides } from '../helpers/updateGuides';

import { SidebarGuide, GuideMonster, GuideEvent } from '../components';
import { MainLayout } from '../layout/MainLayout';

import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export const ViewGuide: React.FC = () => {

    const { type } = useCustomSelector(state => state.guideList.events);

    const { guideId } = useParams(); //  => droplist

    updateGuides();

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
                    <>
                        {type != "Events"
                            ? <GuideMonster />
                            : <GuideEvent />
                        }
                    </>
                </Grid>

            </Grid>
        </MainLayout >
    )
}