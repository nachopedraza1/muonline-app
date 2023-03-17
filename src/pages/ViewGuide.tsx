import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { useFindMob } from '../hooks/useFindMob';
import { NextArrow, PrevArrow } from "../helpers";

import { MainLayout } from '../layout/MainLayout';
import { MobStats, MapContainer, DropMob } from '../components';
import { Grid, Typography, IconButton, InputAdornment, OutlinedInput, Container, Divider, Button } from '@mui/material';
import { KeyboardArrowRight, Search, Share } from "@mui/icons-material";


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
        <MainLayout className="bgGuides">
            <Grid container justifyContent="space-between">

                <Grid item xs={12} textAlign="center">
                    <Typography
                        variant='subtitle1'
                        fontSize={45}
                        textAlign="center"
                        m="50px 0px 35px 0px"
                    >
                        Guías Invasiones
                    </Typography>
                </Grid>

                <Grid item xs={3} mt={4.3}>
                    <form >
                        <OutlinedInput
                            fullWidth
                            placeholder="Busca una guía"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        sx={{ height: "56px", width: "60px" }}
                                        edge="end"
                                    >
                                        <Search fontSize="large" />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </form>
                </Grid>

                <Grid item xs={8.8} >
                    <Grid container alignItems="center" mb={1}>
                        <Typography variant="subtitle1" fontSize={15}>
                            Invasiones
                        </Typography>
                        <KeyboardArrowRight />
                        <Typography variant="subtitle1" fontSize={15}>
                            Gorgon
                        </Typography>
                    </Grid>

                    <Grid container bgcolor="white" p={4}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item display="flex" alignItems="center">
                                <img src="/assets/images/spr_etc.png" width="30px" />
                                <Typography variant="subtitle1" color="#603a3a" fontSize={35} ml={1}> Gorgon invasion </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton>
                                    <img src="/assets/images/reg_update.svg" width="35px" />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Divider />

                        <Grid container justifyContent="end" alignItems="center" gap={1}>
                            <Typography variant="subtitle1" color="#a1a0a0" fontSize={14}>
                                Última modificación : 08 mar. 2023, 05:37 (UTC)
                            </Typography>
                            <IconButton >
                                <Share sx={{ color: "#a1a0a0" }} />
                            </IconButton>
                        </Grid>

                        <Grid item >
                            <Typography
                                maxWidth="md"
                                fontSize={18}
                                textAlign="start"
                                margin="auto"
                                color="#603a3a"
                                mt={2}
                            >
                                El poblado de DUNGEON  es invadido por 3 poderosos magos oscuros, su estrategia es el ataque dividido  en sectores claves del pueblo , tu deber es  proteger el poblado y sus habitantes, dependemos de ti y tu sabiduría guerrero.
                            </Typography>
                        </Grid>

                        <Slider {...settings} key={idEffect} className="animate__animated animate__fadeIn custom-slick">
                            {guides.map(({ name, info, drop, maps, media, stats }) => (
                                <Grid container direction="column" alignItems="center" key={name} >
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
                    </Grid>
                </Grid>

            </Grid>
        </MainLayout >
    )
}


{/* <Slider {...settings} key={idEffect} className="animate__animated animate__fadeIn custom-slick">
{guides.map(({ name, info, drop, maps, media, stats }) => (
    <Grid container direction="column" alignItems="center" key={name} >

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
</Slider> */}
