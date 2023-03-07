
import { SubMenuLayout } from '../layout/SubMenuLayout';
import { SubMenuProps } from '../../interfaces/interfaces';

export const EventsMenu: React.FC<SubMenuProps> = ({ openSubmenu, handleClose }) => {

    const typeMenu = openSubmenu === "events" ? "submenu-active" : "";

    return (
        <SubMenuLayout openSubmenu={openSubmenu} typeMenu={typeMenu} handleClose={handleClose}>
            Eventos
        </SubMenuLayout>
    )
}
