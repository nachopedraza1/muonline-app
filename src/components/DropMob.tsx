import { Grid, Typography } from '@mui/material';

import { Drop } from '../interfaces/interfaces';

export const DropMob: React.FC<{ drop: Drop[], infoDrop: string }> = ({ drop, infoDrop }) => {

    return (
        <Grid container direction="column"  alignItems="center">
            <Typography variant='h6' fontWeight={600}> {infoDrop} </Typography>
            {
                drop.map(({ itemName, itemUrl, size, quantity }) => (
                    <Grid item display="flex" alignItems="center" p={1}>
                        <img src={itemUrl} width={size} alt={`${itemName} protocol mu`} />
                        <Typography variant='h6' fontWeight={300}> {itemName.toUpperCase()} </Typography>
                    </Grid>
                ))
            }
        </Grid>
    )
}
