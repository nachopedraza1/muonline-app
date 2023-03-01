import { useState, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Container, Grid, List, ListItem, Link, Button } from '@mui/material';
import { ExpandMore } from "@mui/icons-material";


const navItems = [
    { text: "Guia de inicio", path: "/" },
    { text: "Invasiones", path: "/" },
    { text: "Bosses", path: "/" },
    { text: "Eventos", path: "/" },
    { text: "Drop List", path: "/" },
]

export const Navbar: React.FC = () => {

    const [stickyClass, setStickyClass] = useState('');
    const [offSetClass, setOffsetClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 54 ? setStickyClass('sticky-nav') : setStickyClass('');
            windowHeight > 54 ? setOffsetClass('offsetnav') : setOffsetClass('');
        }
    };

    return (
        <>
            <div className={`${offSetClass}`}></div>
            <Grid container bgcolor="primary.dark" p="15px 0px" className={`${stickyClass}`}>
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <img src="assets/images/LOGO.png" alt="" width="190px" />
                        </Grid>
                        <Grid>
                            <List className="navlinks" disablePadding sx={{ display: "flex" }}>
                                {navItems.map(({ text, path }) => (
                                    <ListItem key={text}>
                                        <Link component={RouterLink} to={path} underline="none" noWrap color="white" fontSize={18}>
                                            {text.toUpperCase()}
                                        </Link>
                                        <ExpandMore />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={2} textAlign="end">
                            <Button variant="outlined">
                                juega ahora
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Grid >
        </>

    )
}


