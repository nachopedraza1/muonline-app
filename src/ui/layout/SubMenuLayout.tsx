import { useSticky } from '../hooks/useSticky';
import { Grid } from '@mui/material';
import { SubMenuProps } from '../../interfaces/interfaces';


export const SubMenuLayout: React.FC<SubMenuProps> = ({ children, openSubmenu, handleClose, typeMenu }) => {

    const { stickySubMenu } = useSticky();

    const onSticky = typeMenu && openSubmenu ? stickySubMenu : null;

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
            className={`submenu ${onSticky} ${typeMenu}`}
            onMouseLeave={handleClose}
        >
            {children}
        </Grid>
    )
}
