
import { Link, List, ListItem, Tooltip } from "@mui/material";

export const SocialButtons: React.FC = () => {
    return (
        <List className="social-list" sx={{ display: "flex", flexDirection: "row" }}>
            <ListItem>
                <Tooltip title="Facebook" arrow>
                    <Link href="https://www.facebook.com/PROTOCOLMUONLINE/" target="_blank"><i className="fab fa-facebook" aria-hidden="true"></i></Link>
                </Tooltip>
            </ListItem>
            <ListItem>
                <Tooltip title="Instagram" arrow>
                    <Link href="https://www.instagram.com/protocol.mu/" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                </Tooltip>
            </ListItem>
            <ListItem>
                <Tooltip title="Twitch" arrow>
                    <Link href="/" target="_blank"><i className="fab fa-twitch" aria-hidden="true"></i></Link>
                </Tooltip>
            </ListItem>
            <ListItem>
                <Tooltip title="Discord" arrow>
                    <Link href="https://discord.gg/zd73EcNbxN" target="_blank"><i className="fab fa-discord" aria-hidden="true"></i></Link>
                </Tooltip>
            </ListItem>
            <ListItem>
                <Tooltip title="YouTube" arrow>
                    <Link href="https://www.youtube.com/channel/UCizen48Bi5kAbOKO4cl5c5g" target="_blank"><i className="fab fa-youtube" aria-hidden="true"></i></Link>
                </Tooltip>
            </ListItem>
        </List>
    )
}