import { Link as RouterLink } from "react-router-dom";
import { useCustomSelector } from "../hooks/useRedux";

import { GuidesLayout } from "../layout/GuidesLayout"
import { Grid } from "@mui/material"

export const SelectMapDrop = () => {

    const { mapsList } = useCustomSelector(state => state.guideList.guide);

    return (
        <GuidesLayout>
            <Grid container justifyContent="center" gap={3}>
                {mapsList?.map(({ mapName, logoUrl, photoUrl, path = "" }) => (
                    <Grid
                        component={RouterLink}
                        to={path}
                        item
                        xs={5.8}
                        p={3}
                        key={mapName}
                        textAlign="center"
                        className="map-item"
                    >
                        <img src={logoUrl} alt={`${mapName} Protocol MU`} className="map-logo" />
                        <img src={photoUrl} width="100%" alt={`${mapName} Protocol MU`} className="map-img" />
                    </Grid>
                ))}
            </Grid>
        </GuidesLayout >
    )
}
