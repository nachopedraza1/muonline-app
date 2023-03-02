import { useSticky } from '../hooks/useSticky';
import { Grid } from '@mui/material';

export const BossMenu: React.FC<{ openSubmenu: string, handleClose: () => void }> = ({ openSubmenu, handleClose }) => {

    const { stickySubMenu } = useSticky();

    const isOpen = openSubmenu === "boss" ? "submenu-active" : "";

    return (
        <Grid
            container
            component="ul"
            width="100%"
            height="200px"
            bgcolor="red"
            className={`submenu ${isOpen && openSubmenu ? stickySubMenu : ""} ${isOpen}`}
            onMouseOut={handleClose}
        >
            boss
        </Grid>
    )
}
