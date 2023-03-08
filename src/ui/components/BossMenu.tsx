import { Link as RouterLink } from 'react-router-dom';

import { SubMenuLayout } from '../layout/SubMenuLayout';
import { Grid, Box, Link, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

import { SubMenuProps } from '../../interfaces/interfaces';

const boss = [
    { id: 1, text: "Selupan", img: "/assets/images/boss/selupan.png", width: "170px", path: "/", status: "inactive" },
    { id: 2, text: "Medusa", img: "/assets/images/boss/medusa.png", width: "140px", path: "/", status: "inactive" },
    { id: 3, text: "Kundun", img: "/assets/images/boss/kundun.png", width: "210px", path: "/", status: "inactive" },
    { id: 4, text: "Bowser", img: "/assets/images/boss/boss1.png", width: "130px", path: "/", status: "inactive" },
    { id: 5, text: "Malus", img: "/assets/images/boss/boss5.png", width: "150px", path: "/", status: "inactive" },
    { id: 6, text: "Primagen ", img: "/assets/images/boss/boss6.png", width: "100px", path: "/", status: "inactive" },
    { id: 7, text: "King Krusha", img: "/assets/images/boss/boss7.png", width: "70px", path: "/", status: "inactive" },
    { id: 8, text: "Queen Zeal", img: "/assets/images/boss/boss4.png", width: "100px", path: "/", status: "inactive" },
    { id: 9, text: "Viper ", img: "/assets/images/boss/boss2.png", width: "115px", path: "/", status: "inactive" },
    { id: 10, text: "Brickster", img: "/assets/images/boss/boss3.png", width: "150px", path: "/", status: "inactive" },
];

export const BossMenu: React.FC<SubMenuProps> = ({ openSubmenu, handleClose }) => {

    const typeMenu = openSubmenu === "boss" ? "submenu-active" : "";

    return (
        <SubMenuLayout openSubmenu={openSubmenu} typeMenu={typeMenu} handleClose={handleClose}>
            {boss.map(({ id, text, img, width, path, status }) => (
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
                    </Link>
                </Grid>
            ))}
            <IconButton onClick={handleClose} sx={{ position: "absolute", top: 10, right: 10 }}>
                <CloseOutlined />
            </IconButton>
        </SubMenuLayout>
    )
}
