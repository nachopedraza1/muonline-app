import { useCustomSelector } from '../hooks/useRedux';

import { GuidesLayout } from '../layout/GuidesLayout';
import { MobStats, DropMob, MapContainer, TitleMob } from './index';
import { Grid, Typography } from '@mui/material';

export const GuideMonster: React.FC = () => {

    const { name, quantity, info } = useCustomSelector(state => state.guideList.guide);

    return (
        <GuidesLayout>
            <Grid container>
                <Typography
                    maxWidth="md"
                    fontSize={18}
                    textAlign="start"
                    margin="auto"
                    color="#6e5856"
                    mt={2}
                >
                    {info?.infoBoss}
                </Typography>
                <Typography fontSize={18} color="#6e5856" width="100%" fontWeight={600}> -Cantidad: {quantity} </Typography>
            </Grid>

            <Grid container direction="column" alignItems="center" key={name} mt={3}>

                <Grid item>
                    <TitleMob />
                </Grid>

                <Grid container mt={2}>
                    <MobStats />
                </Grid>

                <Grid container justifyContent="center" alignItems="center">
                    <MapContainer />
                    <DropMob />
                </Grid>

            </Grid>
        </GuidesLayout >
    )
}
