import { Grid, Typography } from '@mui/material';

const serverInfo = [
    { id: 1, type: "Server type", text: "Medium" },
    { id: 2, type: "Server version", text: "Season 6" },
    { id: 3, type: "Expe", text: "x200" },
    { id: 4, type: "Master Expe", text: "x15" },
    { id: 5, type: "Drop", text: "25%" },
    { id: 7, type: "Master Level", text: "250" },
    { id: 8, type: "Puntos x reset", text: "500" },
    { id: 9, type: "Cuentas por IP", text: "3" },
    { id: 10, type: "Borra stats", text: "Activado" },
    { id: 12, type: "Off helper", text: "Activado" },
]

export const ServerInfo: React.FC = () => {
    return (
        <Grid container className="server-info">
            <Typography variant="h3">Server info</Typography>
            <img src="assets/images/section_arrow_down.png" className="server-info__arrow-bottom" />
            {
                serverInfo.map(({ id, type, text }) => (
                    <Grid container key={id} justifyContent="center" className="divider">
                        <Grid item xs={5}>
                            <Typography variant="h6"> {type} </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant="h6"> {text} </Typography>
                        </Grid>
                    </Grid>
                ))
            }
        </Grid>
    )
}
