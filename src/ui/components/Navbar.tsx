import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { useSticky } from '../hooks/useSticky';
import { InvasionsMenu, BossMenu, EventsMenu, SemiBossMenu } from '../components';

import { Container, Grid, List, ListItem, Link, Button } from '@mui/material';
import { ExpandMore } from "@mui/icons-material";


export const Navbar: React.FC = () => {

    const { stickyNavbar, offSetNavbar } = useSticky();

    const [openSubmenu, setOpenSubmenu] = useState<string>('');

    const handleOpen = (type: string) => setOpenSubmenu(type);
    const handleClose = () => setOpenSubmenu('');

    return (
        <>
            <div className={offSetNavbar}></div>
            <Grid container className={`navbar ${stickyNavbar}`}>
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <img src="/assets/images/LOGO.png" alt="Protocol Mu" className='logo' width="190px" />
                        </Grid>
                        <Grid>
                            <List component="nav" className="navlinks" disablePadding sx={{ display: "flex" }}>
                                <ListItem onMouseEnter={() => handleOpen("invasions")} className={openSubmenu === "invasions" ? "active" : ""} >
                                    <Link component={RouterLink} to="/" underline="none" noWrap color="white" fontSize={18}>
                                        INVASIONES
                                    </Link>
                                    <ExpandMore />
                                </ListItem>
                                <ListItem onMouseEnter={() => handleOpen("boss")} className={openSubmenu === "boss" ? "active" : ""}>
                                    <Link component={RouterLink} to="/" underline="none" noWrap color="white" fontSize={18}>
                                        BOSSES
                                    </Link>
                                    <ExpandMore />
                                </ListItem>
                                <ListItem onMouseEnter={() => handleOpen("semiboss")} className={openSubmenu === "semiboss" ? "active" : ""}>
                                    <Link component={RouterLink} to="/" underline="none" noWrap color="white" fontSize={18}>
                                        SEMIBOSS
                                    </Link>
                                    <ExpandMore />
                                </ListItem>
                                <ListItem onMouseEnter={() => handleOpen("events")} className={openSubmenu === "events" ? "active" : ""}>
                                    <Link component={RouterLink} to="/" underline="none" noWrap color="white" fontSize={18}>
                                        EVENTOS
                                    </Link>
                                    <ExpandMore />
                                </ListItem>
                                <ListItem onMouseEnter={handleClose} >
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
            <SemiBossMenu openSubmenu={openSubmenu} handleClose={handleClose} />
            <EventsMenu openSubmenu={openSubmenu} handleClose={handleClose} />
        </>
    )
}


