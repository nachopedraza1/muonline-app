import { useCustomSelector } from '../hooks/useRedux';
import { GuidesLayout } from "../layout/GuidesLayout"
import { BloodCastle, ChaosCastle, DevilSquare } from './GuideEventsViews';
import { Grid } from '@mui/material';

export const GuideEvent: React.FC = () => {

    const { id } = useCustomSelector(state => state.guideList.guide);

    return (
        <GuidesLayout>
            <Grid>
                {id === "18" && <BloodCastle />}
                {id === "19" && <ChaosCastle />}
                {id === "20" && <DevilSquare />}
            </Grid>
        </GuidesLayout >
    )
}
