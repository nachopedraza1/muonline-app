import { useCustomSelector } from '../../hooks/useRedux';
import { Typography, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';


export const ChaosCastle: React.FC = () => {
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
                Como ingresar al Chaos Castle
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
                    <Typography variant="subtitle1" color="#6e5856"> Armor of Guardsman </Typography>
                </Grid>
                <Grid item textAlign="center">
                    <Typography variant="subtitle1" color="#6e5856"> Mapa {name}</Typography>
                    <img src={maps?.photoUrl} alt="" width="350px" />
                </Grid>
            </Grid>

            <Typography
                mt={3}
                variant="subtitle1"
                fontSize={25}
                color="#6e5856"
            >
                Reglas del Chaos Castle
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
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>{name} Level</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="center">Entry Level</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="center">Premios</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rooms?.map(({ level, entryLevel, reward }) => (
                            <TableRow key={level}>
                                <TableCell component="th" scope="row">
                                    {level}
                                </TableCell>
                                <TableCell align="center"> {entryLevel} </TableCell>
                                <TableCell align="center"> {reward} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
