import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link, List, ListItem } from '@mui/material';
import { SocialButtons } from './components/SocialButtons';

const navItemsFooter = [
    { id: 1, text: "INICIO", path: "/" },
    { id: 2, text: "WEB OFICIAL", path: "/" },
    { id: 3, text: "REGISTRO", path: "/" },
    { id: 4, text: "RANKINGS", path: "/" },
    { id: 5, text: "DESCARGAS", path: "/" },
    { id: 6, text: "CONTACTO", path: "/" },
]

export const Footer: React.FC = () => {
    return (
        <Grid container direction="column" alignItems="center" padding={10}>
            <List component="nav" className="navlinks" disablePadding sx={{ display: "flex" }}>
                {navItemsFooter.map(({ id, text, path }) => (
                    <ListItem key={id}>
                        <Link component={RouterLink} to={path} underline="none" noWrap color="white" fontSize={18}>
                            {text}
                        </Link>
                    </ListItem>
                ))}
            </List>
            <img src="/assets/images/LOGO.png" alt="" width="250px" />
            <SocialButtons />
        </Grid>
    )
}
