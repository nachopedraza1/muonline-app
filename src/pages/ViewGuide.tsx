import { useFindMob } from '../hooks/useFindMob';

import { MobStats, SlideMaps, DropMob } from '../components';
import { MainLayout } from '../layout/MainLayout';

import { Box, Grid, Typography } from '@mui/material';


export const ViewGuide: React.FC = () => {

    const { name, info, maps, drop, infoDrop } = useFindMob();
    
    return (
        <MainLayout>
            <Grid
                container
                direction="column"
                alignItems="center"
                key={name}
                className="animate__animated animate__fadeIn"
            >
                <Grid item
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
                        mt={2}
                    >
                        {name}
                    </Typography>
                </Grid>
                <MobStats />

                <Typography
                    maxWidth="md"
                    fontSize={17}
                    fontWeight={300}
                    textAlign="center"
                    mt={2}
                >
                    {info}
                </Typography>

                <Grid container justifyContent="center" mt={3} gap={4}>

                    <Grid item xs={4} gap={3} display="flex" flexDirection="column">
                        <Grid display="flex" justifyContent="center" alignItems="center">
                            <img src="/assets/images/icons/map.png" width="50px" />
                            <Typography variant='h4' ml={1} className="text-shadow">
                                Maps
                            </Typography>
                        </Grid>
                        <SlideMaps maps={maps} />
                    </Grid>

                    <Grid item xs={4} gap={3} display="flex" flexDirection="column">
                        <Grid display="flex" justifyContent="center" alignItems="center">
                            <img src="/assets/images/icons/drop.png" width="50px" />
                            <Typography variant='h4' ml={1} className="text-shadow">
                                Drop
                            </Typography>
                        </Grid>
                        <DropMob drop={drop} infoDrop={infoDrop} />
                    </Grid>

                </Grid>

            </Grid>
        </MainLayout >
    )
}
