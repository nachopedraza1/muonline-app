import { useCustomSelector } from '../hooks/useRedux';
import { GuidesLayout } from "../layout/GuidesLayout"
import { BloodCastle, ChaosCastle } from './GuideEventsViews';
import { Grid } from '@mui/material';

export const GuideEvent: React.FC = () => {

    const { id } = useCustomSelector(state => state.guideList.events);

    return (
        <GuidesLayout>
            <Grid>
                {id === "18" && <BloodCastle />}
                {id === "19" && <ChaosCastle />}

            </Grid>
        </GuidesLayout >
    )
}
