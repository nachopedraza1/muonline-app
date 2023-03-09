import { useFindMob } from '../hooks/useFindMob';

import { Footer } from '../ui/Footer';
import { MobStats, SlideMaps } from '../components';
import { MainLayout } from '../layout/MainLayout';

import { Grid, Typography } from '@mui/material';


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
                    m={5}
                    maxWidth="md"
                    fontSize={17}
                    fontWeight={600}
                    textAlign="center"
                >
                    {info}
                </Typography>

                <Grid container justifyContent="center">
                    <Grid item xs={4} sx={{ boxShadow: "0px 17px 33px rgba(10, 151, 254, 0.3)" }}>
                        <SlideMaps maps={maps} />
                    </Grid>
                    <Grid key={1} item xs={4} display="flex" flexDirection="column" alignItems="center">
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
