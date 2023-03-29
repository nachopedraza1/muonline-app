import { useCustomSelector } from '../hooks/useRedux';
import { RequestCorrection, ShareGuide, CustomBreadcrumb } from '../components';
import { Grid, Typography, Divider } from '@mui/material';

export const GuidesLayout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {

    const { name: nameMonster } = useCustomSelector(state => state.guideList.monsters)
    const { name: nameEvent, type } = useCustomSelector(state => state.guideList.events);

    const guideName = type != "Events" ? nameMonster : nameEvent;

    return (
        <>
            <CustomBreadcrumb />

            <Grid container bgcolor="white" className="paper-guide" p={4}>
                <Grid className="animate__animated animate__fadeIn" key={guideName}>
                    <Grid container justifyContent="space-between" alignItems="center">

                        <Grid item display="flex" alignItems="center">
                            <img src="/assets/images/spr_etc.png" width="30px" />
                            <Typography variant="subtitle1" fontSize={35} ml={1} color="#6e5856"> {guideName} </Typography>
                        </Grid>

                        <Grid item>
                            <RequestCorrection />
                        </Grid>

                    </Grid>
                    <Divider />

                    <ShareGuide />

                    {children}

                </Grid>
            </Grid>
        </>
    )
}
