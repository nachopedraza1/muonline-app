import { useFindMob } from '../hooks/useFindMob';

import { Footer } from '../ui/Footer';
import { MobStats, SlideMaps } from '../components';
import { MainLayout } from '../layout/MainLayout';

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';


export const ViewGuide: React.FC = () => {

    const { name, info, maps, drop } = useFindMob();

    return (
        <MainLayout>
            <Grid container direction="column" alignItems="center">
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
                    fontWeight={600}
                    textAlign="center"
                >
                    {info}
                </Typography>

                <Grid container justifyContent="center" mt={3}>

                    <Grid item xs={4} gap={4} display="flex" flexDirection="column">
                        <Grid display="flex" justifyContent="center" alignItems="center">
                            <img src="/assets/images/icons/map.png" width="50px" />
                            <Typography variant='h4' ml={1} className="text-shadow">
                                Maps
                            </Typography>
                        </Grid>
                        <SlideMaps maps={maps} />
                    </Grid>

                    <Grid item xs={4} gap={4} display="flex" flexDirection="column" alignItems="center">
                        <Grid item display="flex" alignItems="center" mb={5}>
                            <img src="/assets/images/icons/drop.png" width="50px" />
                            <Typography variant='h4' ml={1} className="text-shadow">
                                Drop
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </MainLayout >
    )
}
