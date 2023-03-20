import { Grid } from "@mui/material";
import { Maps } from "../interfaces/interfaces";

export const MapContainer: React.FC<{ maps: Maps }> = ({ maps }) => {

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