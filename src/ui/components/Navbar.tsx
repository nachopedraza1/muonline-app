import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { useSticky } from '../hooks/useSticky';
import { InvasionsMenu, BossMenu, EventsMenu, SemiBossMenu } from '../components';

import { Container, Grid, List, ListItem, Link, Button } from '@mui/material';
import { ExpandMore } from "@mui/icons-material";

const navLinks = [
    { id: 1, text: "INVASIONES", type: "invasions", path: "" },
    { id: 2, text: "SEMIBOSSES", type: "semiboss", path: "" },
    { id: 3, text: "BOSSES", type: "boss", path: "" },
    { id: 4, text: "EVENTOS", type: "events", path: "" },
    { id: 5, text: "DROPLIST", type: "droplist", path: "/guides/droplist" },
];


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

                        <Grid item xs={2} component={RouterLink} to="/">
                            <img src="/assets/images/LOGO.png" alt="Protocol Mu" className='logo' width="190px" />
                        </Grid>

                        <Grid item>
                            <List component="nav" className="navlinks" disablePadding sx={{ display: "flex" }}>
                                {navLinks.map(({ id, text, type, path }) => (
                                    <Link key={id} component={RouterLink} to={path} >
                                        <ListItem onMouseEnter={() => handleOpen(type)} className={openSubmenu === type ? "active" : ""} >
                                            <Link fontSize={18}>
                                                {text}
                                            </Link>
                                            {type != "droplist" ? <ExpandMore /> : null}
                                        </ListItem>
                                    </Link>
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

            <InvasionsMenu openSubmenu={openSubmenu} handleClose={handleClose} />
            <BossMenu openSubmenu={openSubmenu} handleClose={handleClose} />
            <SemiBossMenu openSubmenu={openSubmenu} handleClose={handleClose} />
            <EventsMenu openSubmenu={openSubmenu} handleClose={handleClose} />
        </>
    )
}


