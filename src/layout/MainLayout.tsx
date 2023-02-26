import { Container } from "@mui/material"


export const MainLayout: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
    return (
        <Container >
            {children}
        </Container>
    )
}
