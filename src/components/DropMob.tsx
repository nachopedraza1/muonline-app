import { useCustomSelector } from '../hooks/useRedux';
import { Grid, Typography } from '@mui/material';

export const DropMob: React.FC = () => {

    const { info, drop } = useCustomSelector(state => state.guideList.guide);

    return (
        <Grid container justifyContent="center" m={2}>
            <Grid container justifyContent="center" alignItems="center">
                <img src="/assets/images/icons/drop.png" />
                <Typography variant="subtitle1" fontSize={25} ml={1} color="#6e5856"> DROP </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    textAlign="center"
                    variant='h6'
                    color="#6e5856"
                    mb={2}
                >
                    {info?.infoDrop}
                </Typography>
            </Grid>
            {drop?.map(({ itemName, itemUrl }) => (
                <Grid
                    key={itemName}
                    className="item-drop"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    p={2}
                >
                    <img src={itemUrl} width="50px" alt={`${itemName} protocol mu`} />
                    <Typography variant='h6' color="#6e5856" fontWeight={600}>{itemName.toUpperCase()} </Typography>
                </Grid>
            ))}
        </Grid>
    )
}


