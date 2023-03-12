import { Grid, Typography } from '@mui/material';

import { Drop } from '../interfaces/interfaces';

export const DropMob: React.FC<{ drop: Drop[], infoDrop: string }> = ({ drop, infoDrop }) => {

    return (
        <Grid container direction="column" alignItems="center">
            <Typography variant='h6' fontWeight={600} mb={6} noWrap> {infoDrop} </Typography>
            {drop.map(({ itemName, itemUrl, size, quantity }) => (
                <Grid container alignItems="center" justifyContent="center" key={itemName}>
                    <Grid item xs={2} textAlign="center">
                        <img src={itemUrl} width={size} alt={`${itemName} protocol mu`} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6' fontWeight={300}> x{quantity} {itemName.toUpperCase()} </Typography>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}
