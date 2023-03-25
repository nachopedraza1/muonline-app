import { Grid, Typography } from "@mui/material"
import { useCustomSelector } from '../hooks/useRedux';

export const TitleMob: React.FC = () => {

    const { name } = useCustomSelector(state => state.guideList.monsters);

    return (
        <Grid
            item
            margin="auto"
            sx={{
                backgroundImage: "url(/assets/images/pvp-item-bg-def.png)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                width: "400px",
                height: "60px"
            }}>
            <Typography
                variant='h4'
                fontSize={28}
                textAlign="center"
                pt={2}
            >
                {name}
            </Typography>
        </Grid>
    )
}
