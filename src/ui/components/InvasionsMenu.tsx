import { useSticky } from '../hooks/useSticky';
import { Grid } from '@mui/material';

export const InvasionsMenu: React.FC<{ openSubmenu: string }> = ({ openSubmenu }) => {

    const { stickyClassSub } = useSticky();

    const isOpen = openSubmenu === "invasions" ? "submenu-active" : "";

    return (
        <Grid
            container
            component="ul"
            position="absolute"
            width="100%"
            height="200px"
            bgcolor="red"
            className={`submenu ${openSubmenu ? stickyClassSub : null} ${isOpen}`}
        >
            invasions
        </Grid>
    )
}
