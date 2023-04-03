import { Grid, Typography } from '@mui/material';
import { useCustomSelector } from "../hooks/useRedux"
import { GuidesLayout } from '../layout/GuidesLayout';

export const GuideMapDrop: React.FC = () => {

    const { name, maps, info } = useCustomSelector(state => state.guideList.guide);

    return (
        <GuidesLayout>
            <Grid container>

                <Grid item xs={5}>
                    <img src={maps?.photoUrl} width="100%" alt={`${name} Mapa protocol mu`} />
                </Grid>

                <Grid item xs={7}>
                    <Typography variant='subtitle1' color="#6e5856">
                        {info?.infoMap}
                    </Typography>
                </Grid>

            </Grid>
        </GuidesLayout>
    )
}
