import { useState, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { InvasionsMenu, BossMenu } from '../components';

import { Container, Grid, List, ListItem, Link, Button } from '@mui/material';
import { ExpandMore } from "@mui/icons-material";
import { useSticky } from '../hooks/useSticky';


export const Navbar: React.FC = () => {

    const { stickyNavbar, offSetNavbar } = useSticky();

    const [openSubmenu, setOpenSubmenu] = useState<string>("");

    const handleOpen = (type: string) => setOpenSubmenu(type);
    const handleClose = () => setOpenSubmenu("");


    return (
        <>
            <div className={offSetNavbar}></div>
            <Grid component="nav" container bgcolor="primary.dark" p="15px 0px" className={stickyNavbar}>
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <img src="assets/images/LOGO.png" alt="" width="190px" />
                        </Grid>
                        <Grid>
                            <List component="nav" className="navlinks" disablePadding sx={{ display: "flex" }}>
                                <ListItem onMouseEnter={handleClose}>
                                    <Link component={RouterLink} to="/" underline="none" noWrap color="white" fontSize={18}>
                                        GUIA DE INICIO
                                    </Link>
                                </ListItem>
                                <ListItem onMouseEnter={() => handleOpen("invasions")}>
                                    <Link component={RouterLink} to="/" underline="none" noWrap color="white" fontSize={18}>
                                        INVASIONES
                                    </Link>
                                    <ExpandMore />
                                </ListItem>
                                <ListItem onMouseEnter={() => handleOpen("boss")}>
                                    <Link component={RouterLink} to="/" underline="none" noWrap color="white" fontSize={18}>
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
                                <ListItem onMouseEnter={handleClose}>
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
            </Grid >
            <InvasionsMenu openSubmenu={openSubmenu} handleClose={handleClose} />
            <BossMenu openSubmenu={openSubmenu} handleClose={handleClose} />
        </>
    )
}


