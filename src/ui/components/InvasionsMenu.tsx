import { Link as RouterLink } from 'react-router-dom';

import { SubMenuLayout } from '../layout/SubMenuLayout';
import { Grid, Box, Link, IconButton, Tooltip } from '@mui/material';
import { Circle, CloseOutlined } from '@mui/icons-material';

import { guidesLinks } from '../../helpers';
import { SubMenuProps } from '../../interfaces/interfaces';

export const InvasionsMenu: React.FC<SubMenuProps> = ({ openSubmenu, handleClose }) => {

    const invasiones = guidesLinks.invasiones
        .concat({ id: 8, text: "Golden Invasion", img: "/assets/images/invasions/goldengoblin.webp", width: "95px", path: "/guides/1", status: "active" })


    const typeMenu = openSubmenu === "invasions" ? "submenu-active" : "";

    return (
        <SubMenuLayout openSubmenu={openSubmenu} typeMenu={typeMenu} handleClose={handleClose}>
            {invasiones.map(({ id, text, img, width, path, status }) => (
                <Grid
                    item
                    key={id}
                    textAlign="center"
                    onClick={handleClose}
                    className={status != "active" ? 'submenu-item-gray' : 'submenu-item'}
                >
                     <Tooltip title={status != "active" ? "INACTIVE" : ""} arrow placement="top">
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
                        </Link>
                    </Tooltip>
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
