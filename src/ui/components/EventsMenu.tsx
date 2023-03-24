
import { SubMenuLayout } from '../layout/SubMenuLayout';
import { SubMenuProps } from '../../interfaces/interfaces';
import { guidesLinks } from '../../helpers/guidesLinks';
import { Grid, Box, Tooltip, IconButton, Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { Circle, CloseOutlined } from '@mui/icons-material';

export const EventsMenu: React.FC<SubMenuProps> = ({ openSubmenu, handleClose }) => {

    const typeMenu = openSubmenu === "events" ? "submenu-active" : "";

    const eventos = guidesLinks.eventos;


    return (
        <SubMenuLayout openSubmenu={openSubmenu} typeMenu={typeMenu} handleClose={handleClose}>
            {eventos.map(({ id, text, img, width, path, status }) => (
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
