import { useCustomSelector } from '../hooks/useRedux';
import { RequestCorrection, ShareGuide, CustomBreadcrumb } from '../components';
import { Grid, Typography, Divider } from '@mui/material';

export const GuidesLayout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {

    const { name } = useCustomSelector(state => state.guideList.guide);

    return (
        <>
            <CustomBreadcrumb />

            <Grid container bgcolor="white" className="paper-guide" p={4}>
                <Grid className="animate__animated animate__fadeIn" key={name}>
                    <Grid container justifyContent="space-between" alignItems="center">

                        <Grid item display="flex" alignItems="center">
                            <img src="/assets/images/spr_etc.png" width="30px" />
                            <Typography variant="subtitle1" fontSize={35} ml={1} color="#6e5856"> {name} </Typography>
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
