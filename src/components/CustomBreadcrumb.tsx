import { Grid, Typography } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { useCustomSelector } from '../hooks/useRedux';

export const CustomBreadcrumb: React.FC = () => {

    const { type: typeMonster, name: nameMonster } = useCustomSelector(state => state.guideList.monsters);
    const { type: typeEvent, name: nameEvent } = useCustomSelector(state => state.guideList.events);

    const displayType = typeEvent != "Events" ? typeMonster : typeEvent;
    const displayName = typeEvent != "Events" ? nameMonster : nameEvent;

    return (
        <Grid container alignItems="center">
            <Typography variant="subtitle1" fontSize={15}>
                {displayType}
            </Typography>
            <KeyboardArrowRight />
            <Typography variant="subtitle1" fontSize={15}>
                {displayName}
            </Typography>
        </Grid>
    )
}
