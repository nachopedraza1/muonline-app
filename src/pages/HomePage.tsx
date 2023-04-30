import { Link } from 'react-router-dom';

import { MainLayout } from '../layout/MainLayout';
import { Banner } from '../components/Banner';
import { Box, Grid, Typography } from '@mui/material';
import { ServerInfo } from '../components';
import { CharacterPage } from './CharacterPage';


export const HomePage: React.FC = () => {
    return (
        <>
            <Banner />
            <Box textAlign="center">
                <img src="/assets/images/scroll-icon.png" width="500px" />
            </Box>
            <MainLayout className='bgBottom'>
                <CharacterPage />
            </MainLayout>
        </>
    )
}

