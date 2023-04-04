import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { useCustomSelector } from "../hooks/useRedux"
import { GuidesLayout } from '../layout/GuidesLayout';
import { KeyboardBackspace } from '@mui/icons-material';

export const GuideMapDrop: React.FC = () => {

    const { name, maps, info, npcs } = useCustomSelector(state => state.guideList.guide);

    return (
        <GuidesLayout>
            <Grid container>

                <Grid container alignItems="center" gap={1} mb={4}>
                    <KeyboardBackspace sx={{ color: "#6e5856" }} />
                    <Typography component={RouterLink} to="/guides/23" variant="subtitle1" color="#6e5856">
                        Regresar a la lista
                    </Typography>
                </Grid>

                <Grid item xs={5}>
                    <img src={maps?.photoUrl} width="100%" alt={`${name} Mapa protocol mu`} />
                </Grid>

                <Grid item xs={7}>
                    <Typography variant='subtitle1' color="#6e5856" fontSize={16}>
                        {info?.infoMap}
                    </Typography>
                </Grid>

                <Grid container justifyContent="center">
                    {npcs?.map(({ photoUrl, coord, info }) => (
                        <Grid item xs={12} display="flex">
                            <img src={photoUrl} />
                        </Grid>
                    ))}
                </Grid>

            </Grid>
        </GuidesLayout>
    )
}
