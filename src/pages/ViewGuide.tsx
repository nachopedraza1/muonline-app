import { Grid, Typography } from '@mui/material';

import { MainLayout } from '../layout/MainLayout';
import { Footer } from '../ui/Footer';
import { MobStats } from '../components';
import { useFindMob } from '../hooks/useFindMob';


export const ViewGuide: React.FC = () => {

    const { name, info, maps } = useFindMob();

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
                    <Grid container justifyContent="center">
                        {maps.map(({ mapName, mapUrl, mapUrlTex }) => (
                            <Grid key={mapName} item xs={4} display="flex" flexDirection="column" alignItems="center">
                                <img src={mapUrlTex} width="150px" alt={`${mapName} protocol mu`} />
                                <img src={mapUrl} width="100%" alt={`${mapName} protocol mu`} />
                            </Grid>
                        ))}
                        <Grid item xs={4}>

                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </MainLayout >
        </Grid >
    )
}
