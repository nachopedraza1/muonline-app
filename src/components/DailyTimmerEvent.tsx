import moment from 'moment';

import { Grid, Typography } from '@mui/material';
import { AccessTime, CalendarMonth } from '@mui/icons-material';

moment.locale("es", {
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un dia',
        dd: '%d dias',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
})

const eventTimes = [
    { name: "Medusa", eventsTimes: ["15:00:00", "21:00:00"] },
    { name: "Balrog", eventsTimes: ["20:30:00", "22:00:00"] },
    { name: "Rey del mu", eventsTimes: ["20:20:00", "23:40:00", "01:00:00"] },
    { name: "Ferea", eventsTimes: ["07:00:00", "13:40:00"] },
    { name: "Ferea", eventsTimes: ["07:00:00", "13:40:00"] },
    { name: "Ferea", eventsTimes: ["07:00:00", "13:40:00"] },
    { name: "Ferea", eventsTimes: ["07:00:00", "13:40:00"] },
    { name: "Ferea", eventsTimes: ["07:00:00", "13:40:00"] },
    { name: "Ferea", eventsTimes: ["07:00:00", "13:40:00"] },
    { name: "Ferea", eventsTimes: ["07:00:00", "13:40:00"] },
    { name: "Ferea", eventsTimes: ["07:00:00", "13:40:00"] },
    { name: "Ferea", eventsTimes: ["07:00:00", "13:40:00"] },
    { name: "Ferea", eventsTimes: ["07:00:00", "13:40:00"] },
];

export const DailyTimmerEvent: React.FC = () => {
    moment.locale('es');
    const UpdateTimeLeft = (eventsTimes: string[]) => {
        const now = moment().valueOf();
        for (const time of eventsTimes) {
            const eventTime = moment(time, "hh:mm:ss").valueOf();
            if (now < eventTime) {
                const timeLeft = moment(eventTime).fromNow();
                return timeLeft;
            }
        }
        return "Ciclo finalizado"
    }

    return (
        <Grid container direction="column" className='animate__animated animate__fadeIn'>
            {eventTimes.map(({ name, eventsTimes }) => (
                <Grid container key={name} padding={1} justifyContent="space-between" className='divider' >
                    <Grid item display="flex" gap={1}>
                        <CalendarMonth sx={{ color: "primary.main" }} />
                        <Typography color="white" fontFamily="Bebas Neue"> {name} </Typography>
                    </Grid>
                    <Grid item xs={4} display="flex" gap={1}>
                        <AccessTime sx={{ color: "primary.main" }} />
                        <Typography color="#999" fontFamily="Bebas Neue"> {UpdateTimeLeft(eventsTimes)}</Typography>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}
