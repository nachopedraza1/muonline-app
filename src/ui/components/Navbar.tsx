import { useState, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { InvasionsMenu, BossMenu } from '../components';

import { Container, Grid, List, ListItem, Link, Button } from '@mui/material';
import { ExpandMore } from "@mui/icons-material";


export const Navbar: React.FC = () => {

    const [stickyClass, setStickyClass] = useState<string>('nosticky-nav');
    const [offSetClass, setOffsetClass] = useState<string>('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 54 ? setStickyClass('sticky-nav') : setStickyClass('nosticky-nav');
            windowHeight > 54 ? setOffsetClass('offsetnav') : setOffsetClass('');
        }
    };

    const [openSubmenu, setOpenSubmenu] = useState<string>("");

    const handleOpen = (type: string) => {
        setOpenSubmenu(type);
    }

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
                            <List component="nav" className="navlinks" disablePadding sx={{ display: "flex" }}>
                                <ListItem>
                                    <Link component={RouterLink} to="/" underline="none" noWrap color="white" fontSize={18}>
                                        GUIA DE INICIO
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={RouterLink} to="/" underline="none" noWrap color="white" fontSize={18} onMouseEnter={() => handleOpen("invasions")}>
                                        INVASIONES
                                    </Link>
                                    <ExpandMore />
                                </ListItem>
                                <ListItem>
                                    <Link component={RouterLink} to="/" underline="none" noWrap color="white" fontSize={18} onMouseEnter={() => handleOpen("boss")}>
                                        BOSSES
                                    </Link>
                                    <ExpandMore />
                                </ListItem>
                                <ListItem>
                                    <Link component={RouterLink} to="/" underline="none" noWrap color="white" fontSize={18}>
                                        EVENTOS
                                    </Link>
                                    <ExpandMore />
                                </ListItem>
                                <ListItem>
                                    <Link component={RouterLink} to="/" underline="none" noWrap color="white" fontSize={18}>
                                        DROP LIST
                                    </Link>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={2} textAlign="end">
                            <Button variant="outlined">
                                juega ahora
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                <InvasionsMenu openSubmenu={openSubmenu} />
                <BossMenu openSubmenu={openSubmenu} />
            </Grid >
        </>
    )
}


