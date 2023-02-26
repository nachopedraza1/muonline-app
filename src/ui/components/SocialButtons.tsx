
import { Link, List, ListItem, Tooltip } from "@mui/material";

export const SocialButtons: React.FC = () => {
    return (
        <List className="social-list" sx={{ display: "flex", flexDirection: "row" }}>
            <ListItem>
                <Tooltip title="Facebook" arrow>
                    <Link href="/" target="_blank"><i className="fab fa-facebook" aria-hidden="true"></i></Link>
                </Tooltip>
            </ListItem>
            <ListItem>
                <Tooltip title="Instagram" arrow>
                    <Link href="/" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                </Tooltip>
            </ListItem>
            <ListItem>
                <Tooltip title="Twitch" arrow>
                    <Link href="/" target="_blank"><i className="fab fa-twitch" aria-hidden="true"></i></Link>
                </Tooltip>
            </ListItem>
            <ListItem>
                <Tooltip title="Discord" arrow>
                    <Link href="/" target="_blank"><i className="fab fa-discord" aria-hidden="true"></i></Link>
                </Tooltip>
            </ListItem>
        </List>
    )
}