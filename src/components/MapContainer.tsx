import { useCustomSelector } from '../hooks/useRedux';
import { Grid } from "@mui/material";

export const MapContainer: React.FC = () => {

    const { guides: { maps } } = useCustomSelector(state => state.guides);

    const { mapName, mapUrl, mapUrlTex } = maps;

    return (
        <Grid item xs={6} position="relative" mt={2}>
            <img
                src={mapUrlTex}
                width="120px"
                alt={`${mapName} protocol mu`}
                style={{
                    position: "absolute",
                    top: 90,
                    left: 0,
                    right: 0,
                    margin: "auto"
                }}
            />
            <img src={mapUrl} alt={`${mapName} protocol mu`} width="100%" />
        </Grid>
    );
}