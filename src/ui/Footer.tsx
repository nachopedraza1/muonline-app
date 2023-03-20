import { Grid } from '@mui/material';
import { SocialButtons } from './components/SocialButtons';

export const Footer: React.FC = () => {
    return (
        <Grid container direction="column" justifyContent="end" alignItems="center" gap={7} mb={2}>
            <img src="/assets/images/LOGO.png" alt="" width="250px" />
            <SocialButtons />
        </Grid>
    )
}
