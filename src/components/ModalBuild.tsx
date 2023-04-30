import { Box, Fade, Grid, IconButton, Modal, Typography } from '@mui/material'
import { ModalType } from '../interfaces/interfaces';
import { Close } from '@mui/icons-material';


const bodyTimmer = {
    width: "1300px",
    height: "90vh",
    boxShadow: 24,
    backgroundColor: "#040616",
    borderRadius: 2,
    overflowY: "scroll",
    p: 2,
};

export const ModalBuild: React.FC<ModalType> = ({ openModal, handleClose, builds }) => {
    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            closeAfterTransition
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Fade in={openModal} timeout={600}>
                <Box sx={{ outline: "none", position: "relative" }} className="modal-container">
                    <Box sx={bodyTimmer}>
                        <Grid container justifyContent="end">
                            <IconButton onClick={handleClose as any}>
                                <Close />
                            </IconButton>
                        </Grid>
                        {builds?.map(({ type, info, imgStats, imgTree }) => (
                            <Grid key={type} color="white" mb={4}>
                                <Typography variant='h4' mb={2}> {type} </Typography>

                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <Typography mb={2}> {info} </Typography>
                                        <img src={imgTree} alt="" width="100%" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <img src={imgStats} alt="" width="100%" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Box>
                </Box>
            </Fade>
        </Modal >
    )
}
