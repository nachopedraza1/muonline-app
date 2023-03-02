import { useState } from 'react';
import { DailyTimmerEvent } from './DailyTimmerEvent';

import { Box, Modal, Fade, Tabs, Tab } from '@mui/material';

import { ModalType, TabPanelProps } from '../interfaces/interfaces';

const headerTimmer = {
    display: "flex",
    justifyContent: "center",
    background: "#181819",
    borderTop: "2px solid #0A97FE",
    p: 2,
}

const bodyTimmer = {
    width: 500,
    height: 430,
    boxShadow: 24,
    backgroundColor: "#0e0d0d",
    overflowY: "scroll",
    p: 2,
};

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index } = props;

    return (
        <Box>
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </Box>
    );
}

export const ModalEventTimmer: React.FC<ModalType> = ({ openModal, handleClose }) => {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
                <Box sx={{ outline: "none", position: "relative" }}>
                    <img src="assets/images/sm-1.png"
                        width="400px"
                        style={{
                            position: "absolute",
                            zIndex: -1,
                            top: -150,
                            left: 185
                        }} />
                    <Box sx={headerTimmer} >
                        <Tabs value={value} onChange={handleChange} textColor='secondary'>
                            <Tab label="EVENTOS DIARIOS" disableRipple />
                            <Tab label="EVENTOS SEMANALES" disableRipple />
                        </Tabs>
                    </Box>
                    <Box sx={bodyTimmer}>
                        <TabPanel value={value} index={0}>
                            <DailyTimmerEvent />
                        </TabPanel>

                        <TabPanel value={value} index={1}>

                        </TabPanel>
                    </Box>
                </Box>
            </Fade>
        </Modal >
    )
}
