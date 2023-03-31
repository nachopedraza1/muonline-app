import { useCustomSelector } from '../hooks/useRedux';
import { Grid, Typography } from '@mui/material';

export const MobStats: React.FC = () => {

    const { stats, media } = useCustomSelector(state => state.guideList.guide);

    return (
        <>
            <Grid item xs={4} display="flex" flexDirection="column" justifyContent="center" className="bgStats">
                {stats?.slice(0, 4).map(({ id, name, value, iconUrl }) => (
                    <Grid item display="flex" alignItems="center" gap={1.5} m={1} key={id}>
                        <img src={iconUrl} width="40px" />
                        <Typography variant='h5' fontFamily="Bebas Neue" color="#6e5856">
                            {name}:
                        </Typography>
                        <Typography variant='h6' fontSize={25} color="#6e5856">
                            {value}
                        </Typography>
                    </Grid>
                ))}
            </Grid>

            <Grid
                item
                xs={4}
                display="flex"
                position="relative"
                alignItems="center"
                justifyContent="center"
                className="bgStats"
            >
                <img src={media?.photoUrl} alt={`${name} protocol mu`} width={media?.photoWidth} />
            </Grid>

            <Grid item xs={4} display="flex" flexDirection="column" justifyContent="center" className="bgStats">
                {stats?.slice(4, 8).map(({ id, name, value, iconUrl }) => (
                    <Grid item display="flex" alignItems="center" justifyContent="end" gap={1.5} m={1} key={id}>
                        <Typography variant='h5' fontFamily="Bebas Neue" color="#6e5856">
                            {name}:
                        </Typography>
                        <Typography variant='h6' fontSize={25} color="#6e5856">
                            {value}
                        </Typography>
                        <img src={iconUrl} width="40px" />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
