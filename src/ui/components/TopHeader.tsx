import { SocialButtons } from './SocialButtons';
import { Grid, Typography, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';


export const TopHeader: React.FC = () => {

    return (
        <AppBar position='relative'>
            <Grid container bgcolor="primary.light" p={1} zIndex={2}>
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid>
                            <Typography variant='h5' fontSize={15}>
                                Welcome to <Typography component="span" variant='h5' color="primary.main" fontSize={15}> PROTOCOL MU </Typography>
                            </Typography>
                        </Grid>
                        <Grid>
                            <SocialButtons />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </AppBar>
    )
}
