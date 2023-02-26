import { Grid, Typography } from '@mui/material';

export const Banner = () => {
    return (
        <Grid container position="relative" justifyContent="end" alignItems="center">
            <img src="assets/images/banner.png" alt="" width="100%" />
            <Grid
                container
                position="absolute"
                direction="column"
                textAlign="center"
                justifyContent="center"
                marginRight={3}
                gap={5}
                sx={{
                    backgroundImage: "url(assets/images/flagevents.png)",
                    width: "124px",
                    height: "280px",
                }}>
                <Grid item>
                    <Typography className='eventText' variant='h3' fontSize={22}> Active <br /> events</Typography>
                </Grid>
                <Grid item >
                    <Typography className='eventText' variant='h3' fontSize={22}>Time <br /> Events</Typography>
                </Grid>
            </Grid>
        </Grid >
    )
}
