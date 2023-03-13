import { Link as RouterLink } from "react-router-dom";

import { SubMenuLayout } from '../layout/SubMenuLayout';
import { Grid, Box, Link, IconButton, Typography, Tooltip } from '@mui/material';
import { Circle, CloseOutlined, FiberManualRecord } from '@mui/icons-material';

import { SubMenuProps } from '../../interfaces/interfaces';

const semiboss = [
    { id: 1, text: "Red Dragon", img: "/assets/images/semiboss/red-dragon.png", width: "130px", path: "/guides/9", status: "active" },
    { id: 2, text: "Skeleton", img: "/assets/images/semiboss/skeleton.png", width: "90px", path: "/guides/10", status: "active" },
    { id: 3, text: "Zaikan", img: "/assets/images/semiboss/santa.png", width: "165px", path: "/guides/11", status: "active" },
    { id: 4, text: "White Wizard", img: "/assets/images/semiboss/white-wizard.png", width: "105px", path: "/guides/12", status: "active" },
    { id: 5, text: "Metal Balrog", img: "/assets/images/semiboss/metal.png", width: "130px", path: "/", status: "inactive" },
    { id: 6, text: "Erohim", img: "/assets/images/semiboss/herohim.png", width: "100px", path: "/", status: "inactive" },
];

export const SemiBossMenu: React.FC<SubMenuProps> = ({ openSubmenu, handleClose }) => {

    const typeMenu = openSubmenu === "semiboss" ? "submenu-active" : "";

    return (
        <SubMenuLayout openSubmenu={openSubmenu} typeMenu={typeMenu} handleClose={handleClose}>
            {semiboss.map(({ id, text, img, width, path, status }) => (
                <Grid
                    item
                    key={id}
                    textAlign="center"
                    onClick={handleClose}
                    className={status != "active" ? 'submenu-item-gray' : 'submenu-item'}
                >
                    <Link
                        fontFamily="Bebas Neue"
                        component={RouterLink}
                        to={path}
                        variant='h5'
                    >
                        <Box width={width}>
                            <img
                                src={img}
                                alt={`Protocol Mu ${text}`}
                                width="100%"
                                className='mob-img'
                            />
                        </Box>
                        {text}
                        <Tooltip title={status.toUpperCase()} arrow placement="top">
                            <IconButton>
                                <Circle sx={{ fontSize: "10px", color: status != "active" ? "red" : "green" }} />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </Grid>
            ))}
            <IconButton onClick={handleClose} sx={{ position: "absolute", top: 10, right: 10 }}>
                <CloseOutlined />
            </IconButton>
        </SubMenuLayout>
    )
}
