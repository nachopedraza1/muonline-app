import { ClearAll } from '@mui/icons-material';
import { Grid, Typography, Divider } from '@mui/material';

export const TooltipKundun: React.FC<{ itemsBox: string[] | undefined }> = ({ itemsBox }) => {
    return (
        <Grid container justifyContent="space-between" padding={1}>
            <Grid item xs={11}>
                <Typography variant='subtitle1' fontSize={17}>Drop Box</Typography>
            </Grid>
            <Grid item xs={1}>
                <ClearAll />
            </Grid>
            <Divider />
            {itemsBox?.map(item => (
                <Grid item xs={6}>
                    <Typography variant='subtitle1' fontSize={13} noWrap>-{item} </Typography>
                </Grid>
            ))}
        </Grid>
    )
}
