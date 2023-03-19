import { Grid, Typography } from '@mui/material';

import { Drop, Info } from '../interfaces/interfaces';

export const DropMob: React.FC<{ drop: Drop[], info: Info }> = ({ drop, info }) => {

    const { infoDrop } = info;

    return (
        <Grid container justifyContent="center" >
            <Grid item xs={12}>
                <Typography
                    textAlign="center"
                    variant='h6'
                    fontWeight={600}
                    noWrap
                    mb={2}
                >
                    {infoDrop}
                </Typography>
            </Grid>
            {drop.map(({ itemName, itemUrl, quantity }) => (
                <Grid item display="flex" flexDirection="column" alignItems="center" key={itemName} p={2}>
                    <img src={itemUrl} width="50px" alt={`${itemName} protocol mu`} />
                    <Typography variant='h6' fontWeight={300} color="#ffc107">{itemName.toUpperCase()} </Typography>
                </Grid>
            ))}
        </Grid>
    )
}
