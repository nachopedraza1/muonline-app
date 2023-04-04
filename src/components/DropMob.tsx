import { useCustomSelector } from '../hooks/useRedux';
import { Grid, Tooltip, Typography } from '@mui/material';
import { TooltipKundun } from './TooltipKundun';

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
            {drop?.map(({ itemName, photoUrl, itemsBox }) => (
                <Tooltip placement='right' title={
                    itemName.includes("Kundun") &&
                    <TooltipKundun itemsBox={itemsBox} />
                }>
                    <Grid
                        key={itemName}
                        className="item-drop"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        p={2}
                    >
                        <img src={photoUrl} width="50px" alt={`${itemName} protocol mu`} />
                        <Typography variant='h6' color="#6e5856" fontWeight={600}>{itemName.toUpperCase()} </Typography>
                    </Grid>
                </Tooltip>
            ))}
        </Grid>
    )
}


