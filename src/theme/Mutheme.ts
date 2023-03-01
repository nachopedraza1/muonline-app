import { createTheme, Tab, Tabs } from '@mui/material';

export const MuTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins&family=Rajdhani:wght@400;700&display=swap');
            `,

        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#d9d9e6"
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    ":before": {
                        borderTop: "thin solid #8953C3"
                    },
                    ":after": {
                        borderTop: "thin solid #8953C3"
                    },
                    borderTop: "thin solid white"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 800,
                    fontSize: 16,
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: 7
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: "white"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: "#514e4e",
                    fontSize: "23px",
                    fontWeight: 500,
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(0, 0, 0, 0.8)"
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#0A97FE",
            light: "#2A2A2E",
            dark: "#181819",
        },
        secondary: {
            main: "#FFFFFF"
        },
    },
    typography: {
        fontFamily: "Rajdhani",
        h5: {
            fontFamily: "Poppins",
        },
        h3: {
            fontFamily: "Bebas Neue",
        }
    }
});