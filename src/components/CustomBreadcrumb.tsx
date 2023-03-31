import { Grid, Typography } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { useCustomSelector } from '../hooks/useRedux';

export const CustomBreadcrumb: React.FC = () => {

    const { type, name } = useCustomSelector(state => state.guideList.guide);

    return (
        <Grid container alignItems="center">
            <Typography variant="subtitle1" fontSize={15}>
                {type}
            </Typography>
            <KeyboardArrowRight />
            <Typography variant="subtitle1" fontSize={15}>
                {name}
            </Typography>
        </Grid>
    )
}
