import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useFindMob } from '../hooks/useFindMob';

import { NextArrow, PrevArrow } from "../helpers/arrows";

import { MainLayout } from '../layout/MainLayout';
import { MobStats, MapContainer, DropMob } from '../components';
import { Grid, Typography } from '@mui/material';


export const ViewGuide: React.FC = () => {

    const idEffect = Math.random();

    const { guides } = useFindMob();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: <NextArrow />,
        nextArrow: <PrevArrow />,
    };

    return (
        <MainLayout>
            <Slider {...settings} key={idEffect} className="animate__animated animate__fadeIn custom-slick">
                {guides.map(({ name, info, drop, maps, media, stats }) => (
                    <Grid container direction="column" alignItems="center" >

                        <Grid
                            item
                            margin="auto"
                            sx={{
                                backgroundImage: "url(/assets/images/pvp-item-bg-def.png)",
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                                width: "400px",
                                height: "60px"
                            }}>
                            <Typography
                                variant='h4'
                                fontSize={28}
                                textAlign="center"
                                pt={2}
                            >
                                {name}
                            </Typography>
                        </Grid>

                        <MobStats stats={stats} media={media} />

                        <Typography
                            maxWidth="md"
                            fontSize={17}
                            textAlign="center"
                            margin="auto"
                            mt={2}
                        >
                            {info.infoBoss}
                        </Typography>

                        <Grid container justifyContent="center" mt={3} mb={6} gap={4}>

                            <Grid item xs={4} gap={3} display="flex" flexDirection="column">
                                <Grid display="flex" justifyContent="center" alignItems="center">
                                    <img src="/assets/images/icons/map.png" width="50px" />
                                    <Typography variant='h4' ml={1} className="text-shadow">
                                        Maps
                                    </Typography>
                                </Grid>
                                <MapContainer maps={maps} />
                            </Grid>

                            <Grid item xs={4} gap={3} display="flex" flexDirection="column">
                                <Grid display="flex" justifyContent="center" alignItems="center">
                                    <img src="/assets/images/icons/drop.png" width="50px" />
                                    <Typography variant='h4' ml={1} className="text-shadow">
                                        Drop
                                    </Typography>
                                </Grid>
                                <DropMob drop={drop} info={info} />
                            </Grid>

                        </Grid>

                    </Grid>
                ))}
            </Slider>
        </MainLayout >
    )
}
