import { createTheme, Tab, Tabs } from '@mui/material';

export const MuTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            body{
                background-color: #040612;
            }
            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins&family=Rajdhani:wght@400;700&display=swap');
            `,
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    borderRadius: 0,
                    paddingRight: 0,
                    color: "white",
                    fontFamily: "StrongSword_New",
                    "&.MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#6e5856"
                        }, '&:hover fieldset': {
                            borderColor: '#6e5856',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: "#6e5856",
                        },
                    },
                }
            }
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
                    width: "100%",
                    backgroundColor: "#6e5856",
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
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: "white",
                    textDecoration: "none",
                    whiteSpace: "nowrap"
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    width: "100%",
                    background: "transparent",
                    boxShadow: "none",
                    "&.Mui-expanded": {
                        margin: "0px"
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: "15px"
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: 18,
                    color: "#6e5856"
                }
            }
        },
    },
    palette: {
        primary: {
            main: "#0A97FE",
            light: "#080D28",
            dark: "#040612",
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
        h4: {
            fontFamily: "Bebas Neue",
        },
        h3: {
            fontFamily: "Bebas Neue",
        },
        subtitle1: {
            fontFamily: "StrongSword_New"
        },
    },
});