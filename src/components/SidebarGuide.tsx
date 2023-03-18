import { InputAdornment, OutlinedInput, IconButton, Grid } from '@mui/material';
import { Search } from '@mui/icons-material';

export const SidebarGuide = () => {
    return (
        <>
            <form >
                <OutlinedInput
                    fullWidth
                    placeholder="Busca una guía"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                sx={{ height: "56px", width: "60px" }}
                                edge="end"
                            >
                                <Search fontSize="large" />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </form>
            <Grid container bgcolor="#0f0b0a" height="600px" mt={2}>

            </Grid>
        </>
    )
}
