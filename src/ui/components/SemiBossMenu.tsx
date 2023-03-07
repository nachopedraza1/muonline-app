import { Link as RouterLink } from "react-router-dom";

import { SubMenuLayout } from '../layout/SubMenuLayout';
import { Grid, Box, Link, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

import { SubMenuProps } from '../../interfaces/interfaces';

const semiboss = [
    { id: 1, text: "Metal Balrog", img: "/assets/images/semiboss/metal.png", width: "130px", path: "/", status: "active" },
    { id: 2, text: "Erohim", img: "/assets/images/semiboss/herohim.png", width: "100px", path: "/", status: "inactive" },
    { id: 3, text: "Red Dragon", img: "/assets/images/semiboss/red-dragon.png", width: "130px", path: "/", status: "active" },
    { id: 4, text: "Skeleton", img: "/assets/images/semiboss/skeleton.png", width: "90px", path: "/", status: "active" },
    { id: 5, text: "Cursed Santa", img: "/assets/images/semiboss/santa.png", width: "165px", path: "/", status: "active" },
    { id: 6, text: "White Wizard", img: "/assets/images/semiboss/white-wizard.png", width: "105px", path: "/", status: "active" },
];

export const SemiBossMenu: React.FC<SubMenuProps> = ({ openSubmenu, handleClose }) => {

    const typeMenu = openSubmenu === "semiboss" ? "submenu-active" : "";

    return (
        <SubMenuLayout openSubmenu={openSubmenu} typeMenu={typeMenu} handleClose={handleClose}>
            {semiboss.map(({ id, text, img, width, path, status }) => (
                <Grid item key={id} textAlign="center" className='submenu-item'>
                    <Link
                        component={RouterLink}
                        to={path}
                        variant='h5'
                        fontFamily="Bebas Neue"
                        underline='none'
                        color="white"
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
                    </Link>
                </Grid>
            ))}
            <IconButton onClick={handleClose} sx={{ position: "absolute", top: 10, right: 10 }}>
                <CloseOutlined />
            </IconButton>
        </SubMenuLayout>
    )
}