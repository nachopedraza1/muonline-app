import { Banner } from "../components/Banner"
import { Header } from "../ui/Header"
import { Box } from '@mui/material';

export const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <Box textAlign="center">
                <img src="assets\images\scroll-icon.png" width="500px"/>
            </Box>
        </>
    )
}

