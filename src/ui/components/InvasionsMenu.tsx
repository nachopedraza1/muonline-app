import { Link as RouterLink } from 'react-router-dom';

import { SubMenuLayout } from '../layout/SubMenuLayout';
import { Grid, Box, Link, IconButton, Typography, Tooltip } from '@mui/material';
import { Circle, CloseOutlined } from '@mui/icons-material';

import { SubMenuProps } from '../../interfaces/interfaces';

const invasions = [
    { id: 1, text: "Golden", img: "/assets/images/invasions/golden.webp", width: "100px", path: "/guides/1", status: "active" },
    { id: 2, text: "Gorgon", img: "/assets/images/invasions/gorgon.webp", width: "120px", path: "/guides/2", status: "active" },
    { id: 3, text: "Golems", img: "/assets/images/invasions/golem-totem.webp", width: "140px", path: "/guides/3", status: "active" },
    { id: 4, text: "Summer", img: "/assets/images/invasions/fireflame.webp", width: "100px", path: "/guides/7", status: "active" },
    { id: 5, text: "Rabbits", img: "/assets/images/invasions/rabit.webp", width: "90px", path: "/guides/6", status: "active" },
    { id: 6, text: "New Year", img: "/assets/images/invasions/puch.webp", width: "140px", path: "/guides/8", status: "active" },
    { id: 7, text: "Ice Queen", img: "/assets/images/invasions/ice-queen.webp", width: "120px", path: "/guides/4", status: "active" },
    { id: 8, text: "Hydra", img: "/assets/images/invasions/hydra.webp", width: "170px", path: "/guides/5", status: "active" },
];

export const InvasionsMenu: React.FC<SubMenuProps> = ({ openSubmenu, handleClose }) => {

    const typeMenu = openSubmenu === "invasions" ? "submenu-active" : "";

    return (
        <SubMenuLayout openSubmenu={openSubmenu} typeMenu={typeMenu} handleClose={handleClose}>
            {invasions.map(({ id, text, img, width, path, status }) => (
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
            <IconButton
                onClick={handleClose}
                sx={{
                    position: "absolute",
                    top: 10,
                    right: 10
                }}
            >
                <CloseOutlined />
            </IconButton>
        </SubMenuLayout >
    )
}
