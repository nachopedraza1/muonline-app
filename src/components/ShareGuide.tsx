import { Grid, Typography, Tooltip, IconButton, Alert, Stack, Button } from '@mui/material';
import { Share } from '@mui/icons-material';
import { useState } from 'react';

export const ShareGuide: React.FC = () => {

    const [copyText, setCopyText] = useState<string>("Compartir Guia");

    const copyClipboard = () => {
        navigator.clipboard.writeText(document.location.href).then(function () {
            setCopyText("URL Copiada!")
            setTimeout(() => { setCopyText("Compartir Guia") }, 2000);
        });
    }

    return (
        <>
            <Grid container justifyContent="end" alignItems="center" gap={1}>
                <Typography variant="subtitle1" color="#a1a0a0" fontSize={14}>
                    Última modificación : 30 Abr. 2023, 05:37 (UTC)
                </Typography>
                <Tooltip title={copyText} arrow placement='bottom-start' >
                    <IconButton onClick={copyClipboard} >
                        <Share sx={{ color: "#a1a0a0" }} />
                    </IconButton>
                </Tooltip>
            </Grid>
        </>
    )
}
