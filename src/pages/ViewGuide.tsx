import { Grid, Typography } from '@mui/material';

import { MainLayout } from '../layout/MainLayout';
import { Footer } from '../ui/Footer';
import { MobStats } from '../components';
import { useFindMob } from '../hooks/useFindMob';


export const ViewGuide: React.FC = () => {

    const { name, info, maps, drop } = useFindMob();

    return (
        <Grid container>
            <MainLayout>
                <Grid container direction="column" alignItems="center">
                    <Grid
                        item
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
                        fontSize={22}
                        fontWeight={600}
                        textAlign="center"
                    >
                        {info}
                    </Typography>

                    <Grid container justifyContent="center">
                        {maps.map(({ mapName, mapUrl, mapUrlTex }) => (
                            <Grid key={mapName} item xs={4} display="flex" flexDirection="column" alignItems="center" className='map-item'>
                                <img src={mapUrlTex} width="150px" alt={`${mapName} protocol mu`} />
                                <img src={mapUrl} alt={`${mapName} protocol mu`} className="img-map" />
                            </Grid>
                        ))}
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
                <Footer />
            </MainLayout >
        </Grid >
    )
}
