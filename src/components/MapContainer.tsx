import { useCustomSelector } from '../hooks/useRedux';
import { Grid } from "@mui/material";

export const MapContainer: React.FC = () => {

    const { name, maps } = useCustomSelector(state => state.guideList.guide);

    return (
        <Grid item xs={6} position="relative" mt={2}>
            <img src={maps?.photoUrl} alt={`${name} protocol mu`} width="100%" />
        </Grid>
    );
}