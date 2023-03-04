import { useSticky } from '../hooks/useSticky';
import { Grid, Box, Link, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { SubMenuProps } from '../../interfaces/interfaces';

const boss = [
    { id: 1, text: "Bowser", img: "assets/images/boss/boss1.png", width: "130px", path: "/", status: "inactive" },
    { id: 2, text: "Viper ", img: "assets/images/boss/boss2.png", width: "115px", path: "/", status: "inactive" },
    { id: 3, text: "Brickster", img: "assets/images/boss/boss3.png", width: "150px", path: "/", status: "inactive" },
    { id: 4, text: "Queen Zeal", img: "assets/images/boss/boss4.png", width: "100px", path: "/", status: "inactive" },
    { id: 5, text: "Malus", img: "assets/images/boss/boss5.png", width: "150px", path: "/", status: "inactive" },
    { id: 6, text: "Primagen ", img: "assets/images/boss/boss6.png", width: "100px", path: "/", status: "inactive" },
    { id: 7, text: "King Krusha", img: "assets/images/boss/boss7.png", width: "70px", path: "/", status: "inactive" },
    { id: 8, text: "Kundun", img: "assets/images/boss/kundun.png", width: "210px", path: "/", status: "inactive" },
    { id: 9, text: "Medusa", img: "assets/images/boss/medusa.png", width: "140px", path: "/", status: "inactive" },
    { id: 10, text: "Selupan", img: "assets/images/boss/selupan.png", width: "170px", path: "/", status: "inactive" },
];

export const BossMenu: React.FC<SubMenuProps> = ({ openSubmenu, handleClose }) => {

    const { stickySubMenu } = useSticky();

    const isOpen = openSubmenu === "boss" ? "submenu-active" : "";

    return (
        <Grid
            container
            component="ul"
            position="fixed"
            justifyContent="center"
            alignItems="end"
            padding={2}
            gap={4}
            bgcolor="rgba(0, 0, 0, 0.9)"
            className={`submenu ${isOpen && openSubmenu ? stickySubMenu : ""} ${isOpen}`}
            onMouseLeave={handleClose}
        >
            {boss.map(({ id, text, img, width, path, status }) => (
                <Grid item key={id} textAlign="center" className='submenu-item' >
                    <Box width={width}>
                        <img
                            src={img}
                            alt={`Protocol Mu ${text}`}
                            width="100%"
                            className='mob-img'
                        />
                    </Box>
                    <Link
                        variant='h5'
                        fontFamily="Bebas Neue"
                        underline='none'
                        color="white"
                    >
                        {text}
                    </Link>
                </Grid>
            ))}
            <IconButton onClick={handleClose} sx={{ position: "absolute", top: 10, right: 10 }}>
                <CloseOutlined />
            </IconButton>
        </Grid >
    )
}
