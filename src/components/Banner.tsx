import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { ModalEventTimmer } from './ModalEventTimmer';

export const Banner = () => {

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <Grid container position="relative" justifyContent="end" alignItems="center">
            <img src="assets/images/banner.png" alt="" width="100%" />
           {/*  <Typography
                variant='h4'
                fontFamily="Rajdhani"
                fontWeight={800}
                position="absolute"
                left="8%"
            >
                TODA LA INFORMACION SOBRE <br />
                NUESTROS EVENTOS!
            </Typography> */}
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
                    <Typography
                        className='eventText'
                        variant='h3'
                        fontSize={22}>
                        Active <br />
                        events
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography
                        className='eventText'
                        variant='h3'
                        fontSize={22}
                        onClick={handleOpen}>
                        Time <br />
                        Events
                    </Typography>
                </Grid>
            </Grid>
            <ModalEventTimmer openModal={openModal} handleClose={handleClose} />
        </Grid >
    )
}
