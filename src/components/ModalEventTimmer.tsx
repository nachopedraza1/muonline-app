import { useState } from 'react';
import { DailyTimmerEvent } from './DailyTimmerEvent';

import { Box, Modal, Fade, Tabs, Tab, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

import { ModalType, TabPanelProps } from '../interfaces/interfaces';

const headerTimmer = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    background: "#0B182B",
    borderTop: "2px solid #0A97FE",
    p: 2,
}

const bodyTimmer = {
    width: 500,
    height: 430,
    boxShadow: 24,
    backgroundColor: "#0b182bc6",
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
                    <Box sx={headerTimmer} >
                        <IconButton sx={{ position: "absolute", top: -26, right: -26 }} onClick={() => handleClose(false)}>
                            <CloseOutlined fontSize='large' sx={{ color: "primary.main" }} />
                        </IconButton>
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
