import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useFindMob } from '../hooks/useFindMob';

import { MainLayout } from '../layout/MainLayout';
import { SidebarGuide, MainGuide } from '../components';
import { Grid, Typography } from '@mui/material';


export const ViewGuide: React.FC = () => {

    const { guides } = useFindMob();

    return (
        <MainLayout className="bgtest">
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
