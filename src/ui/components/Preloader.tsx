import { useState, useEffect } from 'react';
import { Grid } from "@mui/material";


export const Preloader = () => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 3500);
    }, [])

    const loadState = isLoading ? "loading-div active" : "loading-div show";

    return (
        <Grid
            container
            className={`loading-div ${loadState}`}
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={3}>
                <img src="/assets/images/preloader.gif" alt="" width="300px" />
            </Grid>
        </Grid>
    )
}