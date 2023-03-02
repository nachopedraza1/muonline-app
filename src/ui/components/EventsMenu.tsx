import { useSticky } from '../hooks/useSticky';
import { Grid } from '@mui/material';

export const EventsMenu: React.FC<{ openSubmenu: string, handleClose: () => void }> = ({ openSubmenu, handleClose }) => {

    const { stickySubMenu } = useSticky();

    const isOpen = openSubmenu === "events" ? "submenu-active" : "";

    return (
        <Grid
            container
            component="ul"
            width="100%"
            height="200px"
            bgcolor="rgba(0, 0, 0, 0.7)"
            className={`submenu ${isOpen && openSubmenu ? stickySubMenu : ""} ${isOpen}`}
            onMouseOut={handleClose}
        >
            Eventos
        </Grid>
    )
}
