import { Grid } from "@mui/material";
import { Maps } from "../interfaces/interfaces";

export const SlideMaps: React.FC<{ maps: Maps }> = ({ maps }) => {

    const { mapName, mapUrl, mapUrlTex } = maps;
    
    return (
        <Grid key={mapName} container className='map-item'>
            <img
                src={mapUrlTex}
                width="150px"
                alt={`${mapName} protocol mu`}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto"
                }}
            />
            <img src={mapUrl} alt={`${mapName} protocol mu`} className="img-map" />
        </Grid>
    );
}