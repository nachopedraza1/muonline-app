import { Grid, Typography } from "@mui/material";
import { Maps } from "../interfaces/interfaces";

export const MapContainer: React.FC<{ maps: Maps }> = ({ maps }) => {

    const { mapName, mapUrl, mapUrlTex } = maps;

    return (
        <Grid key={mapName} container alignItems="center" className='map-item'>
            <Grid item xs={6}>
                <img src={mapUrl} alt={`${mapName} protocol mu`} className="img-map" width="100%" />
            </Grid>
            <Grid item xs={6} position="relative">
                <img
                    src={mapUrlTex}
                    width="120px"
                    alt={`${mapName} protocol mu`}
                    style={{
                        position: "absolute",
                        top: -70,
                        left: 0,
                        right: 0,
                        margin: "auto"
                    }}
                />
                <Typography variant="h6" fontSize={15} textAlign="center">
                    Lorencia is a wide plain located in the center of MU. Dark knights and Dark Sorcerers begin their careers here. Due to heavy rainfall tall trees and grasses abound. It is a suitable hunting place for low level (1-20) adventurers.
                </Typography>
            </Grid>
        </Grid>
    );
}