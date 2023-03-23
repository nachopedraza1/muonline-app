import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { guidesLinks } from '../helpers';
import { SearchGuide } from './SearchGuide';

import { Grid, Accordion, AccordionSummary, Typography, AccordionDetails, ListItem, List } from '@mui/material';
import { Circle, ExpandMore } from '@mui/icons-material';

export const SidebarGuide = () => {

    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <>
            <SearchGuide />

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

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMore fontSize='large' />}
                    >
                        <Typography variant="subtitle1" ml={1} fontSize={27}> Golden Invasion</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <List disablePadding>
                            {
                                guidesLinks.golden.map(({ text, status, path }) => (
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
