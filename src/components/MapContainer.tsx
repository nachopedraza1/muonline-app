import { useCustomSelector } from '../hooks/useRedux';
import { Grid } from "@mui/material";

export const MapContainer: React.FC = () => {

    const { maps } = useCustomSelector(state => state.guideList.guide);

    return (
        <Grid item xs={6} position="relative" mt={2}>
            <img
                src={maps?.mapUrlTex}
                width="120px"
                alt={`${maps?.mapName} protocol mu`}
                style={{
                    position: "absolute",
                    top: 90,
                    left: 0,
                    right: 0,
                    margin: "auto"
                }}
            />
            <img src={maps?.mapUrl} alt={`${maps?.mapName} protocol mu`} width="100%" />
        </Grid>
    );
}