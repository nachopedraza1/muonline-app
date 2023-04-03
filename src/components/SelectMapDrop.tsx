import { useCustomSelector } from "../hooks/useRedux"

import { GuidesLayout } from "../layout/GuidesLayout"
import { Grid } from "@mui/material"

export const SelectMapDrop = () => {

    const { mapsDrop } = useCustomSelector(state => state.guideList.guide);

    return (
        <GuidesLayout>
            <Grid container justifyContent="center" gap={3}>
                {
                    mapsDrop?.map(({ mapName, mapUrl, mapUrlTex }) => (
                        <>
                            <Grid
                                item
                                xs={5.8}
                                p={3}
                                key={mapName}
                                textAlign="center"
                                className="map-item"
                            >
                                <img src={mapUrlTex} alt={`${mapName} Protocol MU`} className="map-logo" />
                                <img src={mapUrl} width="100%" alt={`${mapName} Protocol MU`} className="map-img" />
                            </Grid>
                        </>
                    ))
                }
            </Grid>
        </GuidesLayout >
    )
}
