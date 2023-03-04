import { useSticky } from '../hooks/useSticky';
import { Grid, Box, Link, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { SubMenuProps } from '../../interfaces/interfaces';

const semiboss = [
    { id: 1, text: "Metal Balrog", img: "assets/images/semiboss/metal.png", width: "130px", path: "/", status: "active" },
    { id: 2, text: "Erohim", img: "assets/images/semiboss/herohim.png", width: "100px", path: "/", status: "inactive" },
    { id: 3, text: "Red Dragon", img: "assets/images/semiboss/red-dragon.png", width: "130px", path: "/", status: "active" },
    { id: 4, text: "Skeleton", img: "assets/images/semiboss/skeleton.png", width: "90px", path: "/", status: "active" },
    { id: 5, text: "Cursed Santa", img: "assets/images/semiboss/santa.png", width: "165px", path: "/", status: "active" },
    { id: 6, text: "White Wizard", img: "assets/images/semiboss/white-wizard.png", width: "105px", path: "/", status: "active" },
];

export const SemiBossMenu: React.FC<SubMenuProps> = ({ openSubmenu, handleClose }) => {

    const { stickySubMenu } = useSticky();

    const isOpen = openSubmenu === "semiboss" ? "submenu-active" : "";

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
            {semiboss.map(({ id, text, img, width, path, status }) => (
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
        </Grid>
    )
}
