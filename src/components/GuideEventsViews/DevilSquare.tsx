import { useCustomSelector } from '../../hooks/useRedux';
import { Typography, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';


export const DevilSquare: React.FC = () => {

    const { name, maps, infoItems, entryItems, rulesItems, rooms } = useCustomSelector(state => state.guideList.guide);

    return (
        <>
            <Grid container mt={1}>
                {infoItems?.map(text => (
                    <Typography
                        key={text}
                        width="100%"
                        fontSize={18}
                        color="#6e5856"
                    >
                        {text}
                    </Typography>
                ))}
            </Grid>

            <Typography
                mt={3}
                variant="subtitle1"
                fontSize={25}
                color="#6e5856"
            >
                Como ingresar al Devil's Square
            </Typography>

            <Grid container mt={1}>
                {entryItems?.map(text => (
                    <Typography
                        key={text}
                        width="100%"
                        fontSize={18}
                        color="#6e5856"
                    >
                        {text}
                    </Typography>
                ))}
            </Grid>

            <Grid container alignItems="center" justifyContent="space-around">
                <Grid item textAlign="center">
                    <img src={maps?.logoUrl} alt="" width="200px" />
                    <Typography variant="subtitle1" color="#6e5856"> Ticket Devil's Square</Typography>
                </Grid>
                <Grid item textAlign="center">
                    <Typography variant="subtitle1" color="#6e5856"> Mapa {name} </Typography>
                    <img src={maps?.photoUrl} alt="" width="350px" />
                </Grid>
            </Grid>

            <Typography
                mt={3}
                variant="subtitle1"
                fontSize={25}
                color="#6e5856"
            >
                Reglas del Devil's Square
            </Typography>

            <Grid container>
                {rulesItems?.map(text => (
                    <Typography
                        key={text}
                        fontSize={18}
                        color="#6e5856"
                        width="100%"
                    >
                        {text}
                    </Typography>
                ))}
            </Grid>

            <TableContainer sx={{ mt: 2 }}>
                <Typography variant="subtitle1" color="red">Dark Knight, Fairy Elf, Dark Wizard</Typography>
                <Typography variant="subtitle1" color="green"> Dark Lord, Magic Gladiator, Rage Fighter</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}> {name} Level</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="center">Entry Level</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="center">Premios</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rooms?.map(({ level, entryLevel, entryLevel2, rewardList = [] }) => (
                            <TableRow key={level}>
                                <TableCell component="th" scope="row">
                                    {level}
                                </TableCell>

                                <TableCell align="center">
                                    <span style={{ color: "red" }}>{entryLevel}</span>
                                    <span style={{ margin: "5px" }}>|</span>
                                    <span style={{ color: "green" }}>{entryLevel2}</span>
                                </TableCell>

                                <TableCell align="center">
                                    {rewardList.map((reward, index) => (
                                        <Typography key={index} color="#6e5856" fontWeight={600}> Puesto {index + 1}: {reward} </Typography>
                                    ))}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
