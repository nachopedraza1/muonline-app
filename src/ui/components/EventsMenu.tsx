import { useSticky } from '../hooks/useSticky';
import { Grid } from '@mui/material';
import { SubMenuProps } from '../../interfaces/interfaces';

export const EventsMenu: React.FC<SubMenuProps> = ({ openSubmenu, handleClose }) => {

    const { stickySubMenu } = useSticky();

    const isOpen = openSubmenu === "events" ? "submenu-active" : "";

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
            Eventos
        </Grid>
    )
}
