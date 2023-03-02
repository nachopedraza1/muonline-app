import { useSticky } from '../hooks/useSticky';
import { Grid, Typography, Box } from '@mui/material';

const invasions = [
    { id: 1, text: "Skeleton", img: "assets/images/skeleton.png", width: "100px", path: "/" },
    { id: 1, text: "White Wizard", img: "assets/images/white-wizard.png", width: "110px", path: "/" },
    { id: 1, text: "Red Dragon", img: "assets/images/red-dragon.png", width: "140px", path: "/" },
    { id: 1, text: "Golden Invasion", img: "assets/images/golden.png", width: "100px", path: "/" },
    { id: 1, text: "Cursed Santa", img: "assets/images/santa.png", width: "170px", path: "/" },
    { id: 1, text: "Hydra Invasion", img: "assets/images/hydra.png", width: "160px", path: "/" },
];

export const InvasionsMenu: React.FC<{ openSubmenu: string, handleClose: () => void }> = ({ openSubmenu, handleClose }) => {

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
            bgcolor="rgba(0, 0, 0, 0.7)"
            className={`submenu ${isOpen && openSubmenu ? stickySubMenu : ""} ${isOpen}`}
            onMouseLeave={handleClose}
        >
            {invasions.map(({ id, text, img, width, path }) => (
                <Grid item key={id} textAlign="center">
                    <Box width={width}>
                        <img
                            src={img}
                            alt={`Protocol Mu ${text}`}
                            width="100%"
                            className='mob-img'
                        />
                    </Box>
                    <Typography variant='h5' fontFamily="Bebas Neue"> {text} </Typography>
                </Grid>
            ))
            }
        </Grid >
    )
}
