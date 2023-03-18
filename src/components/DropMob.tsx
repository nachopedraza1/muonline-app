import { Grid, Typography } from '@mui/material';

import { Drop, Info } from '../interfaces/interfaces';

export const DropMob: React.FC<{ drop: Drop[], info: Info }> = ({ drop, info }) => {

    const { infoDrop } = info;

    return (
        <Grid container direction="column" alignItems="center">
            <Typography variant='h6' fontWeight={600} mb={2} noWrap> {infoDrop} </Typography>
            {drop.map(({ itemName, itemUrl, size, quantity }) => (
                <Grid container alignItems="center" justifyContent="center" key={itemName} p={1}>
                    <Grid item xs={2}>
                        <img src={itemUrl} width={size} alt={`${itemName} protocol mu`} style={{ margin: "auto" }} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6' fontWeight={300} > x{quantity} {itemName.toUpperCase()} </Typography>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}
