import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { InputAdornment, OutlinedInput, IconButton, Grid, Accordion, AccordionSummary, Typography, AccordionDetails, ListItem, List } from '@mui/material';
import { Circle, ExpandMore, Search } from '@mui/icons-material';
import { guidesLinks } from '../helpers/guidesLinks';

export const SidebarGuide = () => {

    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <form >
                <OutlinedInput
                    fullWidth
                    placeholder="Busca una guía"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                sx={{
                                    height: "56px",
                                    width: "55px",
                                    bgcolor: "#6e5856",
                                    borderRadius: 0,
                                    padding: 0,
                                    "&:hover": { backgroundColor: "#6e5856" }
                                }}
                            >
                                <Search fontSize="large" />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </form>

            <Grid container bgcolor="rgba(0, 0, 0, 0.5)" mt={2}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMore fontSize='large' />}
                    >
                        <Typography variant="subtitle1" fontSize={27} ml={1}> Invasiones</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pt: 0, pb: 0 }} >
                        <List disablePadding>
                            {
                                guidesLinks.invasiones.map(({ text, status, path }) => (
                                    <ListItem component={RouterLink} to={path} key={text} className="item-sidebar">
                                        < Circle sx={{ fontSize: "10px", color: status != "active" ? "red" : "green" }} />
                                        <Typography variant="subtitle1" ml={1} fontSize={20}>
                                            {text}
                                        </Typography>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
                    <AccordionSummary
                        expandIcon={<ExpandMore fontSize='large' />}
                    >
                        <Typography variant="subtitle1" ml={1} fontSize={27}> Semi Bosses</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <List disablePadding>
                            {
                                guidesLinks.semibosses.map(({ text, status, path }) => (
                                    <ListItem component={RouterLink} to={path} key={text} className="item-sidebar">
                                        <Circle sx={{ fontSize: "10px", color: status != "active" ? "red" : "green" }} />
                                        <Typography variant="subtitle1" ml={1} fontSize={20}>
                                            {text}
                                        </Typography>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMore fontSize='large' />}
                    >
                        <Typography variant="subtitle1" ml={1} fontSize={27}> Bosses</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <List disablePadding>
                            {
                                guidesLinks.bosses.map(({ text, status, path }) => (
                                    <ListItem component={RouterLink} to={path} key={text} className="item-sidebar">
                                        <Circle sx={{ fontSize: "10px", color: status != "active" ? "red" : "green" }} />
                                        <Typography variant="subtitle1" ml={1} fontSize={20}>
                                            {text}
                                        </Typography>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </AccordionDetails>
                </Accordion>

            </Grid>
        </>
    )
}
