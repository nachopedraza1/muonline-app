import moment from 'moment';
import { Divider, Grid, Typography } from '@mui/material';
import { AccessTime, CalendarMonth } from '@mui/icons-material';

const eventTimes = [
    { name: "Medusa", eventsTimes: ["16:36:00", "18:00:00"] },
    { name: "Balrog", eventsTimes: ["15:30:00", "06:00:00"] },
    { name: "Ferea", eventsTimes: ["07:00:00", "13:40:00"] }
]

export const DailyTimmerEvent: React.FC = () => {

    const UpdateTimeLeft = (eventsTimes: string[]) => {
        const now = moment().valueOf();

        for (const time of eventsTimes) {
            const eventTime = moment(time, "hh:mm:ss").valueOf();
            if (now < eventTime) {
                const timeLeft = moment(eventTime).fromNow();
                return timeLeft;
            } else {
                return "Diaria out "
            }
        }
    }

    return (
        <Grid container direction="column">
            {eventTimes.map(({ name, eventsTimes }) => (
                <>
                    <Grid container key={name} padding={1} justifyContent="space-between" >
                        <Grid item display="flex" gap={1}>
                            <CalendarMonth sx={{ color: "primary.main" }} />
                            <Typography color="white" fontFamily="Bebas Neue"> {name} </Typography>
                        </Grid>
                        <Grid item xs={4} display="flex" gap={1}>
                            <AccessTime sx={{ color: "primary.main" }} />
                            <Typography color="#999" fontFamily="Bebas Neue"> {UpdateTimeLeft(eventsTimes)}</Typography>
                        </Grid>
                    </Grid>
                    <div className='divider'></div>
                </>
            ))}
        </Grid>
    )
}

/*     const UpdateTimeLeft = (eventsTimes: string[]) => {
        const now = moment().valueOf();

        for (const time of eventsTimes) {
            const eventTime = moment(time, "hh:mm:ss").valueOf();
            if (now < eventTime) {
                const timeLeft = moment(eventTime).fromNow();
                return timeLeft;
            } else {
                return "Diaria out "
            }
        }
    } */
