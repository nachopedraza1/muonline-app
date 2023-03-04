import { useSticky } from '../hooks/useSticky';
import { Grid, Box, Link, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { SubMenuProps } from '../../interfaces/interfaces';

const invasions = [
    { id: 1, text: "Golden Invasion", img: "assets/images/invasions/golden.png", width: "100px", path: "/", status: "inactive" },
    { id: 2, text: "Gorgon", img: "assets/images/invasions/gorgon.png", width: "120px", path: "/", status: "active" },
    { id: 3, text: "Golems", img: "assets/images/invasions/golem-totem.png", width: "140px", path: "/", status: "active" },
    { id: 4, text: "Fire Flame", img: "assets/images/invasions/fireflame.png", width: "100px", path: "/", status: "active" },
    { id: 5, text: "Rabbits", img: "assets/images/invasions/rabit.png", width: "140px", path: "/", status: "active" },
    { id: 6, text: "Pouchs", img: "assets/images/invasions/puch.png", width: "140px", path: "/", status: "active" },
    { id: 7, text: "Ice Queen", img: "assets/images/invasions/ice-queen.png", width: "120px", path: "/", status: "active" },
    { id: 8, text: "Hydra", img: "assets/images/invasions/hydra.png", width: "170px", path: "/", status: "active" },
];

export const InvasionsMenu: React.FC<SubMenuProps> = ({ openSubmenu, handleClose }) => {

    const { stickySubMenu } = useSticky();

    const isOpen = openSubmenu === "invasions" ? "submenu-active" : "";

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
            {invasions.map(({ id, text, img, width, path, status }) => (
                <Grid item key={id} textAlign="center" className='submenu-item'>
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
