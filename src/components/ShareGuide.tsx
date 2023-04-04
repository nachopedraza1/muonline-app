import { Grid, Typography, Tooltip, IconButton } from '@mui/material';
import { Share } from '@mui/icons-material';

export const ShareGuide: React.FC = () => {
    return (
        <Grid container justifyContent="end" alignItems="center" gap={1}>
            <Typography variant="subtitle1" color="#a1a0a0" fontSize={14}>
                Última modificación : 08 mar. 2023, 05:37 (UTC)
            </Typography>
            <Tooltip title="Compartir Guia" arrow placement='bottom-start'>
                <IconButton >
                    <Share sx={{ color: "#a1a0a0" }} />
                </IconButton>
            </Tooltip>
        </Grid>
    )
}
