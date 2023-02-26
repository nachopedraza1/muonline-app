import { CssBaseline, ThemeProvider } from "@mui/material"
import { MuTheme } from "./Mutheme"

export const AppTheme: React.FC<{ children: JSX.Element }> = ({ children }) => {

    return (
        <ThemeProvider theme={MuTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}